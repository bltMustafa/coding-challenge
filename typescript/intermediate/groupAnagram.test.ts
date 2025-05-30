import groupAnagram from "./groupAnagram";


describe("groupAnagram", () => {
    it("should return an array of arrays", () => {
        expect(groupAnagram(["listen", "silent", "enlist", "hello", "ohlle", "world"])).toEqual([["listen", "silent", "enlist"], ["hello", "ohlle"], ["world"]]);
    });

    it("should return an empty array if the input is an empty array", () => {
        expect(groupAnagram([])).toEqual([]);
    });
    
    it("case insensitive", () => {
        expect(groupAnagram(["LİSTE", "İSTEL", "HELLO", "OHLLİ", "WORLD"])).toEqual([["LİSTE", "İSTEL"], ["HELLO", "OHLLİ"], ["WORLD"]]);
    });

});