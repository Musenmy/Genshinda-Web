const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const realtimeResults = {
    elapsedTime: {
        name: "時間",
        value: 0,
        unit: "秒",
    },
    obtainedPoints: {
        name: "獲得ポイント",
        value: 0,
        unit: "pt",
    },
    clearedWords: {
        name: "完答単語数",
        value: 0,
        unit: "語",
    },
    okTypesCount: {
        name: "正しいタイプ数",
        value: 0,
        unit: "回",
    },
    ngTypesCount: {
        name: "ミスタイプ数",
        value: 0,
        unit: "回",
    },
    typesPerSec: {
        name: "平均タイピング速度",
        value: "0.00",
        unit: "回/秒",
    },
};

let typingText;
let currentTarget;
let timeLimit;
let pressedKeys = new Set();
let isPlaying = false;
let timerInterval;
let loadNextWordTimeout;
let usedIndexes = [];
const choices = $$(".choice");
const display = $("#display");
const timeDiv = $("#timeDiv");
const timeDisplay = $("#timeDisplay");
const timeBar = $("#timeBar");
const cover = $("#cover");
const startButton = $("#startButton");
let reducedTargetStrings = [];
let gameMode = null;
let currentIndexForSortedMode = 0;

function getRandomTargetString() {
    if (usedIndexes.length === reducedTargetStrings.length) usedIndexes = [];
    let index;
    // prevent appearing same string until all strings have been used
    do {
        index = Math.floor(Math.random() * reducedTargetStrings.length);
    } while (usedIndexes.includes(index));
    usedIndexes.push(index);
    return reducedTargetStrings[index];
}

function setupNewTarget() {
    if (gameMode == "timed") {
        currentTarget = getRandomTargetString();
    } else {
        currentTarget = reducedTargetStrings[currentIndexForSortedMode];
        currentIndexForSortedMode++;
    }
    typingText = new TypingText(currentTarget.parsed);
    pressedKeys.clear();
    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = `
<div class="typingInstructions">
  <div class="plain-text">${currentTarget.plain}</div>
  <div class="parsed-text"><span class="correct">${typingText.completedText}</span><span>${typingText.remainingText}</span></div>
  <div class="roman-text"><span class="correct">${typingText.completedRoman}</span><span>${typingText.remainingRoman}</span></div>
</div>`;
}

function startGame() {
    const genreChoiceValue = [...document.getElementsByName("genre")].findIndex((r) => r.checked);
    const levelChoiceValue = [...document.getElementsByName("lv")].findIndex((r) => r.checked);
    const timeChoiceValue = [...document.getElementsByName("time")].findIndex((r) => r.checked);
    const lvRanges = [
        [0, 10],
        [10, 15],
        [15, 20],
        [20, 99],
        [0, 99],
    ];
    const timeLimits = [60, 90, 120, 180, 300];
    // when you add new wordList, append genre string and modify html with same value
    const genres = ["general", "alan"];
    const [minLen, maxLen] = lvRanges[levelChoiceValue];
    if (timeChoiceValue == 5) {
        gameMode = "sorted";
        timeLimit = null;
    } else {
        gameMode = "timed";
        timeLimit = timeLimits[timeChoiceValue];
    }
    const genre = genres[genreChoiceValue];
    reducedTargetStrings = targetStrings[genre].filter((obj) => {
        return minLen <= obj.parsed.length && obj.parsed.length <= maxLen;
    });
    if (!reducedTargetStrings.length) {
        reducedTargetStrings = targetStrings[genre];
        alert("文字数絞り込みの結果がありませんでした。絞り込みなしで続けます。");
    }
    isPlaying = true;
    Object.values(realtimeResults).forEach((i) => (i.value = 0)); // init results
    currentIndexForSortedMode = 0;

    if (gameMode == "timed") {
        timeDisplay.textContent = `残り${timeLimit}`;
        timeBar.max = timeLimit;
        timeBar.value = timeLimit;
    } else {
        timeDisplay.textContent = `経過時間 0`;
        timeBar.max = 0;
        timeBar.value = 0;
    }
    // hide start button
    startButton.style.display = "none";
    choices.forEach((e) => (e.style.display = "none"));
    // show timer and first word
    timeDiv.style.display = "flex";
    setupNewTarget();
    // start time limit countdown
    timerInterval = setInterval(() => {
        realtimeResults.elapsedTime.value++;
        if (gameMode == "timed") {
            timeDisplay.textContent = `残り${timeLimit - realtimeResults.elapsedTime.value}`;
            timeBar.value = timeLimit - realtimeResults.elapsedTime.value;
            if (timeLimit - realtimeResults.elapsedTime.value <= 0) endGame();
        } else {
            timeDisplay.textContent = `経過時間 ${realtimeResults.elapsedTime.value}`;
            timeBar.value = realtimeResults.elapsedTime.value;
        }
    }, 1000);
}

function endGame() {
    clearTimeout(loadNextWordTimeout);
    isPlaying = false;
    clearInterval(timerInterval);
    if (gameMode == "timed") {
        const adjustedTime = timeLimit - realtimeResults.clearedWords.value * 0.5;
        realtimeResults.typesPerSec.value = (realtimeResults.okTypesCount.value / adjustedTime).toFixed(2);
        display.innerHTML = `<h3>制限時間終了！</h3>`;
        Object.values(realtimeResults).forEach((result) => {
            const p = document.createElement("p");
            p.innerHTML = `${result.name}: ${result.value}${result.unit}`;
            display.appendChild(p);
        });
    } else {
        let clearTime = realtimeResults.elapsedTime.value;
        const adjustedTime = clearTime - realtimeResults.clearedWords.value * 0.5;
        realtimeResults.typesPerSec.value = (realtimeResults.okTypesCount.value / adjustedTime).toFixed(2);
        display.innerHTML = `<h3>ゲーム終了！</h3>`;
        Object.values(realtimeResults).forEach((result) => {
            const p = document.createElement("p");
            p.innerHTML = `${result.name}: ${result.value}${result.unit}`;
            display.appendChild(p);
        });
    }
    if (cover) {
        cover.style.display = "none";
        cover.classList.remove("fade-in", "fade-out");
        cover.innerHTML = "";
    }
    startButton.style.display = "inline-block";
    choices.forEach((e) => (e.style.display = "flex"));
    timeDiv.style.display = "none";
}
document.addEventListener("keydown", (event) => {
    if (!isPlaying || event.key.length > 1 || pressedKeys.has(event.key)) return;
    pressedKeys.add(event.key);
    const result = typingText.inputKey(event.key);
    if (result === "unmatch") {
        realtimeResults.ngTypesCount.value++;
    } else {
        realtimeResults.okTypesCount.value++;
        if (result === "complete") {
            realtimeResults.obtainedPoints.value += (Math.floor(typingText.text.length / 5) + 1) * 50;
            realtimeResults.clearedWords.value++;
            if (gameMode == "timed") {
                cover.innerHTML = `<p>${realtimeResults.clearedWords.value + 1}語目</p>`;
            } else {
                cover.innerHTML = `${realtimeResults.clearedWords.value + 1}語目 / ${reducedTargetStrings.length}語`;
                if (currentIndexForSortedMode == reducedTargetStrings.length) {
                    return endGame();
                }
            }
            cover.style.display = "flex";
            cover.classList.remove("fade-out");
            cover.classList.add("fade-in");
            loadNextWordTimeout = setTimeout(() => {
                setupNewTarget();
                cover.classList.remove("fade-in");
                cover.classList.add("fade-out");
                cover.addEventListener(
                    "animationend",
                    () => {
                        cover.style.display = "none";
                        cover.classList.remove("fade-out");
                    },
                    {
                        once: true,
                    },
                );
            }, 250);
        }
    }
    updateDisplay();
});
document.addEventListener("keyup", (event) => {
    pressedKeys.delete(event.key);
});
startButton.addEventListener("click", () => {
    setTimeout(startGame, 3000);
    cover.style.display = "flex";
    cover.classList.remove("fade-out");
    cover.classList.add("fade-in");
    let count = 3;
    cover.innerHTML = `<p>${count}</p>`;
    const countdown = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(countdown);
            cover.classList.remove("fade-in");
            cover.classList.add("fade-out");
            cover.addEventListener(
                "animationend",
                () => {
                    cover.style.display = "none";
                    cover.classList.remove("fade-out");
                },
                {
                    once: true,
                },
            );
        } else {
            cover.innerHTML = `<p>${count}</p>`;
        }
    }, 1000);
});
