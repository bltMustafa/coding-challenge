import mostFrequentChar from "./mostFrequentChar";


describe("mostFrequentChar", () => {
    it("should return the correct character for a normal string", () => {
      expect(mostFrequentChar("banana")).toEqual({ char: "a", count: 3 });
    });
  
    it("should return first most frequent character when tie exists", () => {
      expect(mostFrequentChar("abcabc")).toEqual({ char: "a", count: 2 }); // a,b,c hepsi 2, ama a ilk
    });
  
    it("should handle all unique characters", () => {
      expect(mostFrequentChar("abcdef")).toEqual({ char: "a", count: 1 });
    });
  
    it("should handle empty string", () => {
      expect(mostFrequentChar("")).toEqual({ char: "", count: 0 });
    });
  });
  