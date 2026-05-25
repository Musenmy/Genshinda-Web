const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

let typingText;
let currentTarget;
let correctCount = 0;
let mistypeCount = 0;
let clearedWords = 0;
let obtainedPoints = 0;
let timeLimit;
let remainingTime;
let pressedKeys = new Set();
let isPlaying = false;
let timerInterval;
let loadNextWordTimeout;
let usedIndexes = [];
const body = document.body;
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
    do index = Math.floor(Math.random() * reducedTargetStrings.length);
    while (usedIndexes.includes(index));
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
        timeLimit = 114514;
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
    correctCount = 0;
    mistypeCount = 0;
    clearedWords = 0;
    obtainedPoints = 0;
    currentIndexForSortedMode = 0;
    remainingTime = timeLimit;
    timeBar.max = timeLimit;
    timeDisplay.textContent = `残り${remainingTime}`;
    timeBar.value = remainingTime;
    startButton.style.display = "none";
    choices.forEach((e) => (e.style.display = "none"));
    timeDiv.style.display = "flex";
    setupNewTarget();
    timerInterval = setInterval(() => {
        remainingTime--;
        if (gameMode == "timed") {
            timeDisplay.textContent = `残り${remainingTime}`;
            timeBar.value = remainingTime;
        } else {
            timeDisplay.textContent = `経過時間 ${114514 - remainingTime}`;
            timeBar.value = 114514 - remainingTime;
        }
        if (remainingTime <= 0) endGame();
    }, 1000);
}

function endGame() {
    clearTimeout(loadNextWordTimeout);
    isPlaying = false;
    clearInterval(timerInterval);
    if (gameMode == "timed") {
        const adjustedTime = timeLimit - clearedWords * 0.5;
        let speed = (correctCount / adjustedTime).toFixed(2);
        display.innerHTML = `
<h3>制限時間終了！</h3>
<p>得点: ${obtainedPoints}pt</p>
<p>完答単語数: ${clearedWords}語</p>
<p>正しいタイプ数: ${correctCount}回</p>
<p>ミスタイプ数: ${mistypeCount}回</p>
<p>平均タイピング速度: ${speed} 回/秒</p>`;
    } else {
        let clearTime = 114514 - remainingTime;
        const adjustedTime = clearTime - clearedWords * 0.5;
        let speed = (correctCount / adjustedTime).toFixed(2);
        display.innerHTML = `
<h3>ゲーム終了！</h3>
<p>クリア時間: ${clearTime}秒</p>
<p>正しいタイプ数: ${correctCount}回</p>
<p>ミスタイプ数: ${mistypeCount}回</p>
<p>平均タイピング速度: ${speed} 回/秒</p>`;
    }
    // Hide any visible cover (e.g. the "n語目" overlay) so results are visible
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
        mistypeCount++;
    } else {
        correctCount++;
        if (result === "complete") {
            obtainedPoints += (Math.floor(typingText.text.length / 5) + 1) * 50;
            clearedWords++;
            if (gameMode == "timed") {
                cover.innerHTML = `<p>${clearedWords + 1}語目</p>`;
            } else {
                cover.innerHTML = `${clearedWords + 1}/${reducedTargetStrings.length}語目`;
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
