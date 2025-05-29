

import { countLetter } from "./countLetter";

describe("countLetter", () => {
    it('counts letters correctly', () => {
        expect(countLetter("Hello")).toEqual({ H: 1, e: 1, l: 2, o: 1 });
    })

    it('returns empty object for empty string', () => {
        expect(countLetter("")).toEqual({});
    });


    it('counts spaces as well', () => {
        expect(countLetter("a a")).toEqual({ a: 2, ' ': 1 });
    });
})