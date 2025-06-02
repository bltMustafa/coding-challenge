
/* ["apple", "banana", "apple", "orange", "banana", "kiwi"]
 --> ["apple", "banana", "orange", "kiwi"]
*/

// new Set() - creates a new set of unique values

// T is a generic type that can be any type
export default function removeDuplicates<T>(arr: T[]): T[] {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}

console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana", "kiwi"]));