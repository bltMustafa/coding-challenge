import wordFrequency from "./wordFrequency";


describe("wordFrequency", () => {
    /* 
      This function should return the frequency of words in a string.
    */
    it("should return the correct frequency of words", () => {
        expect(wordFrequency("Hello World, Hello World")).toEqual({ hello: 2, world: 2 });
    });

    it("handles empty string", () => {
        expect(wordFrequency("")).toEqual({});
    })

    it("is case insensitive", () => {
        expect(wordFrequency("HELLO, WORLD")).toEqual({ hello: 1, world: 1 });
    })

    it("ignores punctuation", () => {
        expect(wordFrequency("hi!, hi, hş")).toEqual({ hi: 2, hş: 1 });
    })

    it("counts single words correctly", () => {
        expect(wordFrequency("hello")).toEqual({ hello: 1 });
    })
});

