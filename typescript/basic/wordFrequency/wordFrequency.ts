
/*
       console.log(wordFrequency("Hello World, Hello World"))  --> hello 2, world 2

*/

export default function wordFrequency(str: string) {

    const cleaned = str.toLowerCase().replace(/[^\p{L}\s]/gu, "");
    const words = cleaned.split(" ").filter(Boolean);

    const counts = {} as Record<string, number>;

    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }

    return counts;

}

console.log(wordFrequency("Hello World, Hello World"));