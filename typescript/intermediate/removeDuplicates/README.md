---

````md
# 🧹 Remove Duplicates and Preserve Order

A TypeScript utility function that removes duplicate values from an array while preserving the original order of elements.

---

## 🧠 Example

### Input

```ts
["apple", "banana", "apple", "orange", "banana", "kiwi"]
````

### Output

```ts
["apple", "banana", "orange", "kiwi"]
```

---

## 📌 Function Signature

```ts
function removeDuplicates<T>(arr: T[]): T[];
```

* **Generic**: Works with strings, numbers, booleans, etc.

---

## ⚙️ How It Works

1. A `Set` is used to track unique elements.
2. The input array is converted into a `Set`, which automatically removes duplicates.
3. The `Set` is then converted back into an array using `Array.from()`.
4. Since `Set` in JavaScript preserves insertion order, the original order is maintained.

---

## 🔧 Technologies

* **Language**: TypeScript
* **Data Structures**: `Set<T>`, `Array<T>`
* **Methods Used**: `Set`, `Array.from`, generics (`<T>`)

---

## 🧪 Example Usage

```ts
import removeDuplicates from "./removeDuplicates";

const input = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
const result = removeDuplicates(input);

console.log(result);
// Output: ["apple", "banana", "orange", "kiwi"]
```

---

## 📁 File Structure

```
removeDuplicates/
├── removeDuplicates.ts        # Function implementation
├── removeDuplicates.test.ts   # Jest test cases
└── README.md                  # This file
```

---

## ✅ Test Coverage Includes

* Normal case with repeated strings
* Empty array input
* Array with no duplicates
* Single-element array
* Order preservation check
* Numbers as input (thanks to generics)

---

## 🧭 Why This Challenge?

* Great practice for using `Set` and generics in TypeScript
* Real-world use case: cleaning input, filtering logs, form validations
* Demonstrates understanding of **immutability** and **data transformations**

