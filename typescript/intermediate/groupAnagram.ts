
/*

   * Input  --  ["listen", "silent", "enlist", "hello", "ohlle", "world"]

   * Output --  [
                ["listen", "silent", "enlist"],
                ["hello", "ohlle"],
                ["world"]
                ]
*/

export default function groupAnagram(words: string[]): any {

    const sorted = words.map(word => word.split("").sort().join("")); // ["eilnst", "eilnst", "eilnst", "ehllo", "ehllo", "dlorw"]
    const grouped = sorted.reduce((acc, curr, index) => {  // { eilnst: ["listen", "silent", "enlist"], ehllo: ["hello", "ohlle"], dlorw: ["world"] } 
        if (!acc[curr]) {
            acc[curr] = [words[index]!];
        } else {
            acc[curr].push(words[index]!);
        }
        return acc;
    }, {} as Record<string, string[]>);

    return Object.values(grouped);
}

console.log(groupAnagram(["listen", "silent", "enlist", "hello", "ohlle", "world"]));