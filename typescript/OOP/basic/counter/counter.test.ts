import { Counter } from "./counter";

describe("Counter", () => {
    it("should increment the count", () => {
        const counter = new Counter(0);
        counter.increment();
        expect(counter.getCount()).toBe(1);
    });

    it("should decrement the count", () => {
        const counter = new Counter(0);
        counter.decrement();
        expect(counter.getCount()).toBe(-1);
    });

    it("should reset the count", () => {
        const counter = new Counter(0);
        counter.increment();
        counter.reset();
        expect(counter.getCount()).toBe(0);
    });

    it("should return the correct value", () => {
        const counter = new Counter(10);
        expect(counter.getValue()).toBe(10);
    });
});