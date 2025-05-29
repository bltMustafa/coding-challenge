
---

````md
# 🧠 TypeScript Coding Challenges

This repository is a personal collection of TypeScript coding challenges designed to improve my problem-solving and functional programming skills. Each challenge is implemented in TypeScript and tested using **Jest**.

## 📁 Project Structure

``` 
coding_challenges/
├── typescript/
│   ├── basic/
│   │   ├── countLetter.ts
│   │   └── countLetter.test.ts
│   ├── intermediate/
│   └── advanced/
├── bun.lockb
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
````

## ⚙️ Tech Stack

| Tool       | Description                               |
| ---------- | ----------------------------------------- |
| TypeScript | Strongly-typed JavaScript                 |
| Bun        | Fast JavaScript runtime & package manager |
| Jest       | JavaScript testing framework              |

## 🚀 Getting Started

### Install dependencies

```bash
bun install
```

### Run the project

```bash
bun run index.ts
```

### Run tests

```bash
bun test
```

## ✅ Features

* 🔁 Daily/weekly TypeScript challenges
* 🧪 Unit tests for each function using Jest
* 🧩 Categorized challenges: basic, intermediate, advanced
* 📚 Self-contained, beginner-friendly problems

## 📌 Example Challenge

### `countLetter.ts`

A function that counts the frequency of each character in a given string.

```ts
countLetter("Hello") 
// Output: { H: 1, e: 1, l: 2, o: 1 }
```

With test coverage:

```ts
describe("countLetter", () => {
  it("counts letters correctly", () => {
    expect(countLetter("Hello")).toEqual({ H: 1, e: 1, l: 2, o: 1 });
  });

  it("returns empty object for empty string", () => {
    expect(countLetter("")).toEqual({});
  });

  it("counts spaces as well", () => {
    expect(countLetter("a a")).toEqual({ a: 2, " ": 1 });
  });
});
```

## 🧭 Purpose

This repository serves as a playground to:

* Practice and strengthen TypeScript skills
* Write clean, testable functional code
* Prepare for technical interviews
* Build a habit of solving coding problems regularly

```
