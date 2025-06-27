# 🔤 Remove Vowels

This utility function removes all **vowels** from a given string.  
It works case-insensitively and preserves non-vowel characters in order.

---

## 🧠 Example

### Input

```ts
"TypeScript"
```

### Output

```ts
"TypScrpt"
```

---

## 📌 Function Signature

```ts
function removeVowels(str: string): string;
```

---

## ⚙️ How It Works

1. The input string is split into individual characters
2. Each character is checked (case-insensitively) against a list of vowels
3. Vowels are filtered out using `Array.prototype.filter`
4. Remaining characters are joined back into a string

---

## 🔧 Technologies

* **Language**: TypeScript
* **Methods Used**: `split`, `toLowerCase`, `includes`, `filter`, `join`
* **Data Structures**: Arrays

---

## 🧪 Example Usage

```ts
import removeVowels from "./removeVowels";

console.log(removeVowels("hello"));     // "hll"
console.log(removeVowels("HELLO"));     // "HLL"
console.log(removeVowels("TypeScript")); // "TypScrpt"
console.log(removeVowels(""));          // ""
```

---

## 🧪 Test Cases (Jest)

```ts
describe("removeVowels", () => {
  it("should remove vowels from a string", () => {
    expect(removeVowels("hello")).toEqual("hll");
  });

  it("should return an empty string if the input is empty", () => {
    expect(removeVowels("")).toEqual("");
  });

  it("should remove vowels from a string with uppercase vowels", () => {
    expect(removeVowels("HELLO")).toEqual("HLL");
  });

  it("should remove vowels from a string with mixed case vowels", () => {
    expect(removeVowels("hEllO")).toEqual("hll");
  });
});
```

---

## 📁 File Structure

```
removeVowels/
├── removeVowels.ts        # Function implementation
├── removeVowels.test.ts   # Unit tests (Jest)
└── README.md              # This file
```

---

## 🧭 Why This Challenge?

* Excellent for practicing array methods
* Reinforces understanding of string manipulation
* Helps solidify foundational TypeScript skills (types + logic)
