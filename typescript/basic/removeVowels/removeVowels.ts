const vowels = ["a", "e", "i", "o", "u"];

export default function removeVowels(str: string): string {
    return str.split("").filter((c) => !vowels.includes(c.toLowerCase())).join("");
}


console.log(removeVowels("hello"));
