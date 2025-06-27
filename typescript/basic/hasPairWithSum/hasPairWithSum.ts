

/* 
 const arr = [1, 2, 3, 4, 5];
 const sum = 7;

 output = true;
*/


export default function hasPairWithSum(arr: number[], sum: number): boolean {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(sum - num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5], 7));
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10));
