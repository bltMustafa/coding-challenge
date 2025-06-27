/* 
    Counter class

    - increment
    - decrement
    - getCount
    - reset
    - getValue
*/


export class Counter {
    private count: number;

    constructor(initialCount: number) {
        this.count = initialCount;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getCount() {
        return this.count;
    }

    reset() {
        this.count = 0;
    }

    getValue(): number {
        return this.count;
    }
}

const counter = new Counter(0);
counter.increment();
counter.decrement();
counter.reset();
console.log(counter.getValue());

