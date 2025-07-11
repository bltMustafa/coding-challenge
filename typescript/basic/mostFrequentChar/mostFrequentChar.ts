

export default function mostFrequentChar(s: string): { char: string, count: number } {
    const charCount = new Map<string, number>();

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let mostFrequentChar = "";
    let maxCount = 0;

    for (const [char, count] of charCount.entries()) {
        if (count > maxCount) {
            mostFrequentChar = char;
            maxCount = count;
        }
    }

    return { char: mostFrequentChar, count: maxCount };
}

console.log(mostFrequentChar("banana"));