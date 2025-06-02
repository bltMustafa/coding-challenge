

````md
# 🔁 Group Anagrams

This utility function groups words that are anagrams of each other from a given list.  
An **anagram** is a word formed by rearranging the letters of another word.

---

## 🧠 Example

### Input

```ts
["listen", "silent", "enlist", "hello", "ohlle", "world"]
````

### Output

```ts
[
  ["listen", "silent", "enlist"],
  ["hello", "ohlle"],
  ["world"]
]
```

---

## 📌 Function Signature

```ts
function groupAnagram(words: string[]): string[][];
```

---

## ⚙️ How It Works

1. Each word is sorted alphabetically (e.g., `"listen"` → `"eilnst"`)
2. Words that share the same sorted version are grouped together
3. A dictionary (`Record<string, string[]>`) is used to collect the groups
4. The final result is an array of arrays using `Object.values()`

---

## 🔧 Technologies

* **Language**: TypeScript
* **Data Structures**: Arrays, Objects (`Record<string, string[]>`)
* **Methods Used**: `map`, `split`, `sort`, `join`, `reduce`, `Object.values`

---

## 🧪 Example Usage

```ts
import groupAnagram from "./groupAnagram";

const result = groupAnagram(["listen", "silent", "hello", "ohlle"]);
console.log(result);

// Output:
// [
//   ["listen", "silent"],
//   ["hello", "ohlle"]
// ]
```

---

## 📁 File Structure

```
groupAnagram/
├── groupAnagram.ts        # Function implementation
├── groupAnagram.test.ts   # Unit tests (Jest)
└── README.md              # This file
```

---

## 🧭 Why This Challenge?

* Great for practicing array & object manipulation
* Common interview problem
* Shows proficiency in algorithmic thinking and `reduce` usage

