import removeDuplicates from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("should remove duplicates from an array", () => {
    const result = removeDuplicates(["apple", "banana", "apple", "orange", "banana", "kiwi"]);
    expect(result).toEqual(["apple", "banana", "orange", "kiwi"]);
  });

  it("should return an empty array if the input array is empty", () => {
    const result = removeDuplicates([]);
    expect(result).toEqual([]);
  });

  it("should return the same array if there are no duplicates", () => {
    const result = removeDuplicates(["apple", "banana", "orange", "kiwi"]);
    expect(result).toEqual(["apple", "banana", "orange", "kiwi"]);
  });

  it("should handle array with one item", () => {
    const result = removeDuplicates(["apple"]);
    expect(result).toEqual(["apple"]);
  });

  it("should preserve the first occurrence of each element", () => {
    const result = removeDuplicates(["kiwi", "apple", "kiwi", "banana", "apple"]);
    expect(result).toEqual(["kiwi", "apple", "banana"]);
  });

  it("should work with numbers", () => {
    const result = removeDuplicates([1, 2, 2, 3, 1, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
