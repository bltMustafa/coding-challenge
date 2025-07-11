Anladım aşkım 😄 `removeVowels` örneğini stil olarak göstermiştin, senin için aynı tarzda ama `mostFrequentChar` fonksiyonuna uygun bir **İngilizce README.md** yazıyorum şimdi:

---

### 📄 `README.md`

````md
# 🔠 Most Frequent Character

This utility function identifies the **most frequently occurring character** in a given string.  
It returns both the character and the number of times it appears.

---

## 🧠 Example

### Input

```ts
"banana"
````

### Output

```ts
{ char: "a", count: 3 }
```

---

## 📌 Function Signature

```ts
function mostFrequentChar(str: string): { char: string; count: number };
```

---

## ⚙️ How It Works

1. The input string is iterated character by character.
2. A frequency map is built using a plain object.
3. The character with the highest count is tracked.
4. The result is returned as an object: `{ char: string, count: number }`.

---

## 🔧 Technologies Used

* **Language**: TypeScript
* **Core Concepts**:

  * Loops (`for...of`)
  * Object as frequency map
  * Conditional logic
* **Data Structures**: Objects (dictionary/hash map)

---

## ✅ Example Usage

```ts
import mostFrequentChar from "./mostFrequentChar";

console.log(mostFrequentChar("banana"));      // { char: "a", count: 3 }
console.log(mostFrequentChar("abcabc"));      // { char: "a", count: 2 }
console.log(mostFrequentChar("abcdef"));      // { char: "a", count: 1 }
console.log(mostFrequentChar(""));            // { char: "", count: 0 }
```

---

## 🧪 Unit Tests (Jest)

```ts
describe("mostFrequentChar", () => {
  it("returns the most frequent character from a regular string", () => {
    expect(mostFrequentChar("banana")).toEqual({ char: "a", count: 3 });
  });

  it("returns the first most frequent character when there's a tie", () => {
    expect(mostFrequentChar("abcabc")).toEqual({ char: "a", count: 2 });
  });

  it("handles a string with all unique characters", () => {
    expect(mostFrequentChar("abcdef")).toEqual({ char: "a", count: 1 });
  });

  it("returns empty result for an empty string", () => {
    expect(mostFrequentChar("")).toEqual({ char: "", count: 0 });
  });
});
```

---

## 📁 File Structure

```
mostFrequentChar/
├── mostFrequentChar.ts        # Function implementation
├── mostFrequentChar.test.ts   # Jest unit tests
└── README.md                  # This file
```

---

## 🧭 Why This Challenge?

* Great for practicing object-based frequency counting
* Helps build skills in iteration and conditional logic
* Reinforces TypeScript type usage

```

---
```
