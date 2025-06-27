# 🔢 Counter (OOP)

This challenge implements a simple **counter class** using TypeScript and object-oriented programming (OOP) principles.

---

## 📌 Objective

Create a `Counter` class with the following features:

- `increment()` → Increases the counter by 1
- `decrement()` → Decreases the counter by 1
- `reset()` → Resets the counter to 0
- `getValue()` → Returns the current counter value

---

## 🧠 Example Usage

```ts
import { Counter } from "./Counter";

const counter = new Counter();

counter.increment(); // +1
counter.increment(); // +1
console.log(counter.getValue()); // 2

counter.decrement(); // -1
console.log(counter.getValue()); // 1

counter.reset(); // back to 0
console.log(counter.getValue()); // 0
```

---

## 🧪 Test Coverage (Jest)

```ts
describe("Counter", () => {
  it("should start at 0", () => {
    const counter = new Counter();
    expect(counter.getValue()).toBe(0);
  });

  it("should increment correctly", () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  it("should decrement correctly", () => {
    const counter = new Counter();
    counter.increment();
    counter.decrement();
    expect(counter.getValue()).toBe(0);
  });

  it("should reset to 0", () => {
    const counter = new Counter();
    counter.increment();
    counter.reset();
    expect(counter.getValue()).toBe(0);
  });
});
```

---

## ⚙️ OOP Concepts Used

| Concept       | How it’s used         |
|---------------|------------------------|
| `class`       | Defines a reusable blueprint for the counter |
| `constructor` | Initializes the internal state |
| `private`     | Prevents direct external access to the `count` |
| `public` methods | Controls the counter (encapsulation) |
| `this`        | Refers to the current object instance |

---

## 📁 Folder Structure

```
counter/
├── Counter.ts          # Counter class implementation
├── Counter.test.ts     # Jest test file
└── README.md           # This file
```

---

## 🧭 Why This Challenge?

- Reinforces core OOP fundamentals in TypeScript
- Great warm-up for larger OOP-based systems
- Teaches encapsulation and class-based design

