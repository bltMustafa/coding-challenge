import removeVowels from "./removeVowels";


describe("removeVowels", () => {
    it("should remove vowels from a string", () => {
        expect(removeVowels("hello")).toEqual("hll");
    });

    it("should return an empty string if the input is empty", () => {
        expect(removeVowels("")).toEqual("");
    });

    it("should remove vowels from a string with uppercase vowels", () => {
        expect(removeVowels("HELLO")).toEqual("HLL");
    });

    it("should remove vowels from a string with mixed case vowels", () => {
        expect(removeVowels("hEllO")).toEqual("hll");
    });
});

