


export function countLetter(str: string) {
    const charCounts: Record<string, number> = {};

    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    return charCounts;
}
