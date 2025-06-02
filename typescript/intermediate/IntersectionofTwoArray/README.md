````md
# 🔗 Intersect Arrays (Preserve Order)

A TypeScript utility function that returns the intersection of two arrays,  
**removing duplicates** and **preserving the order of the first array**.

---

## 🧠 Example

### Input

```ts
const arr1 = ["apple", "banana", "cherry"];
const arr2 = ["banana", "cherry", "date"];
````

### Output

```ts
["banana", "cherry"]
```

---

## 📌 Function Signature

```ts
function intersectArrays<T>(arr1: T[], arr2: T[]): T[];
```

* **Generic**: Works with strings, numbers, or any comparable primitive values.

---

## ⚙️ How It Works

1. The second array is converted into a `Set` for fast lookup.
2. The first array is iterated in order.
3. For each item in `arr1`, we check:

   * Is it in `arr2`?
   * Have we already added it?
4. If both are true, we include it in the result.
5. This preserves **order** and **uniqueness** based on `arr1`.

---

## 🧪 Example Usage

```ts
import intersectArrays from "./intersectArrays";

const result = intersectArrays(
  ["apple", "banana", "cherry"],
  ["banana", "cherry", "date"]
);

console.log(result);
// Output: ["banana", "cherry"]
```

---

## 📁 File Structure

```
intersectArrays/
├── intersectArrays.ts        # Function implementation
├── intersectArrays.test.ts   # Jest test cases
└── README.md                 # This file
```

---

## ✅ Test Coverage Includes

* Common elements
* Duplicates in input
* No overlap between arrays
* One or both arrays empty
* Numbers instead of strings
* Unordered second array

---

## 🧭 Why This Challenge?

* Practices use of `Set` for efficient lookups
* Reinforces **filter**, **uniqueness**, and **order preservation**
* Shows understanding of time complexity and real-world use cases

