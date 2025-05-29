---

````md
# 🧠 Letter Counter Challenge

## 📌 Task

Write a function that counts how many times each letter appears in a given string.

---

## 📥 Input

- A string (e.g., `"hello"`)

## 📤 Output

- A dictionary / object where:
  - Keys are the letters
  - Values are the number of times that letter appears in the string

---

## ✅ Example

### Input:

```txt
"hello"
```
````

### Output:

```json
{
  "h": 1,
  "e": 1,
  "l": 2,
  "o": 1
}
```

---

## 🧠 Notes

- You should loop through the string one character at a time.
- If a letter already exists in the result, increase its count by 1.
- If it doesn’t exist yet, add it to the result with a count of 1.
- You can ignore punctuation, spaces, or numbers if you want to make it more focused on letters.

---

## 🔁 Possible Enhancements

- Make it case-insensitive (`"H"` and `"h"` should be counted together).
- Filter out non-letter characters (like digits or punctuation).

```

```
