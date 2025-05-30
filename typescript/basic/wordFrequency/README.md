# 🔡 Word Frequency Counter

A simple TypeScript function that counts how many times each word appears in a given string.  
It cleans punctuation, handles case sensitivity, and returns the result as an object.

---

## 📌 Purpose

This utility function helps in analyzing word repetition within a sentence or paragraph.  
Useful for:
- Basic natural language processing
- Interview-style coding challenges
- Input analysis and frequency statistics

---

## 🧠 How It Works

1. Converts all characters to lowercase to avoid case mismatch.
2. Removes punctuation and special characters using regex.
3. Splits the string into words.
4. Iterates over the words and counts how many times each one occurs.

---

## 🧪 Example Usage

```ts
import wordFrequency from "./wordFrequency";

console.log(wordFrequency("Hello World, Hello World"));
