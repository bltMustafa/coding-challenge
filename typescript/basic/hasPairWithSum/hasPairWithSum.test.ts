import hasPairWithSum from "./hasPairWithSum";


/* 
   toBe -> matcher
*/


describe("hasPairWithSum", () => {

    it("should return true if a pair exists", () => {
        expect(hasPairWithSum([1, 2, 3, 4, 5], 7)).toBe(true);  // 3 + 4
    });

    it("should return false if no pair exists", () => {
        expect(hasPairWithSum([1, 2, 3], 10)).toBe(false);
    });

    it("should return false for empty array", () => {
        expect(hasPairWithSum([], 5)).toBe(false);
    });

    it("should return false for array with one element", () => {
        expect(hasPairWithSum([5], 5)).toBe(false);
    });

    it("should return true with negative numbers", () => {
        expect(hasPairWithSum([-1, -2, -3, -4], -6)).toBe(true);  // -2 + -4
    });
});