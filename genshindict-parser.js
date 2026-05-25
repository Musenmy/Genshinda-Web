// get original file from https://genshin-dictionary.com/ja/opendata before running on nodejs
const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "genshindict-original.json");
const outputFile = path.join(__dirname, "genshindict-parsed.json");

const input = JSON.parse(fs.readFileSync(inputFile, "utf-8"));
const output = [];

input.forEach((entry) => {
    const plain = entry.ja;
    if (plain.includes("/")) return; // skip entries with multiple words
    let parsed = entry.pronunciationJa?.replace(/・/g, ""); // parsed must be able to parsed into romaji

    if (!parsed) {
        // if no pronunciation, check if plain is pronunciation itself (contains only hiragana and katakana)
        if (/^[\u3040-\u309F\u30A0-\u30FF]+$/.test(plain)) parsed = plain;
        else return;
    }

    output.push({
        plain,
        parsed,
    });
});

fs.writeFileSync(outputFile, JSON.stringify({ general: output }, null, 4), "utf-8");
console.log(`Parsed data written to ${outputFile}`);
