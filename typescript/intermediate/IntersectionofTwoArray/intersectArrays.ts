/* 
    arr1 = ["apple", "banana", "cherry"]
    arr2 = ["banana", "cherry", "date"]

    output = ["banana", "cherry"]
*/

export default function intersectArrays<T>(arr1: T[], arr2: T[]): T[] {
    const set_two = new Set(arr2);
    const seen = new Set();

    return arr1.filter((i) => {
        if (set_two.has(i) && !seen.has(i)) {
            seen.add(i);
            return true;
        }
        return false;
    })

}

console.log(intersectArrays(["apple", "banana", "banana", "cherry"], ["banana", "cherry", "date", "banana"]));
