import intersectArrays from "./intersectArrays";

describe("intersectArrays", () => {
  it("returns common elements preserving the order from arr1", () => {
    const arr1 = ["apple", "banana", "cherry"];
    const arr2 = ["banana", "cherry", "date"];
    const result = intersectArrays(arr1, arr2);
    expect(result).toEqual(["banana", "cherry"]);
  });

  it("returns empty array if no common elements", () => {
    const arr1 = ["apple", "banana"];
    const arr2 = ["cherry", "date"];
    const result = intersectArrays(arr1, arr2);
    expect(result).toEqual([]);
  });

  it("handles repeated elements and only returns one of each", () => {
    const arr1 = ["apple", "banana", "banana", "cherry"];
    const arr2 = ["banana", "banana", "cherry", "date"];
    const result = intersectArrays(arr1, arr2);
    expect(result).toEqual(["banana", "cherry"]);
  });

  it("returns empty array if one of the arrays is empty", () => {
    const result1 = intersectArrays([], ["banana", "cherry"]);
    const result2 = intersectArrays(["apple", "banana"], []);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  it("returns empty array if both arrays are empty", () => {
    const result = intersectArrays([], []);
    expect(result).toEqual([]);
  });

  it("works with numbers", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const result = intersectArrays(arr1, arr2);
    expect(result).toEqual([3, 4]);
  });

  it("preserves first array's order even if second array is unordered", () => {
    const arr1 = ["a", "b", "c", "d"];
    const arr2 = ["d", "b", "a"];
    const result = intersectArrays(arr1, arr2);
    expect(result).toEqual(["a", "b", "d"]);
  });
});
