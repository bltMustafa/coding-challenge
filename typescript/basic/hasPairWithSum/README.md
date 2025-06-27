# ➕ Has Pair With Sum

This utility function checks whether any two numbers in an array sum up to a given target value.  
It returns `true` if such a pair exists, otherwise `false`.

---

## 🧠 Example

### Input

```ts
hasPairWithSum([1, 2, 3, 4, 5], 7)
```

### Output

```ts
true  // (3 + 4)
```

---

## 📌 Function Signature

```ts
function hasPairWithSum(arr: number[], sum: number): boolean;
```

---

## ⚙️ How It Works

1. A `Set` is used to keep track of previously seen numbers
2. For each number in the array:
   - Check if `(sum - num)` exists in the set
   - If it does, return `true`
   - If not, add `num` to the set
3. If the loop completes without finding a pair, return `false`

---

## 🔧 Technologies

* **Language**: TypeScript
* **Data Structures**: Set
* **Time Complexity**: `O(n)`
* **Space Complexity**: `O(n)`

---

## 🧪 Example Usage

```ts
import hasPairWithSum from "./hasPairWithSum";

console.log(hasPairWithSum([1, 2, 3, 4, 5], 7));  // true
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // false
console.log(hasPairWithSum([], 5));              // false
console.log(hasPairWithSum([5], 5));             // false
```

---

## 🧪 Test Cases (Jest)

```ts
describe("hasPairWithSum", () => {
  it("should return true if a pair exists", () => {
    expect(hasPairWithSum([1, 2, 3, 4, 5], 7)).toBe(true);  // 3 + 4
  });

  it("should return false if no pair exists", () => {
    expect(hasPairWithSum([1, 2, 3], 10)).toBe(false);
  });

  it("should return false for empty array", () => {
    expect(hasPairWithSum([], 5)).toBe(false);
  });

  it("should return false for array with one element", () => {
    expect(hasPairWithSum([5], 5)).toBe(false);
  });

  it("should return true with negative numbers", () => {
    expect(hasPairWithSum([-1, -2, -3, -4], -6)).toBe(true);  // -2 + -4
  });
});
```

---

## 📁 File Structure

```
hasPairWithSum/
├── hasPairWithSum.ts        # Function implementation
├── hasPairWithSum.test.ts   # Unit tests (Jest)
└── README.md                # This file
```

---

## 🧭 Why This Challenge?

* Teaches how to use `Set` efficiently
* Classic interview question
* Reinforces problem-solving with hash-based lookups
