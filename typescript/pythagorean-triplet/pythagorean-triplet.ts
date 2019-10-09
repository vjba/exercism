export default class Triplet {

    numbers: number[]

    constructor(a: number, b: number, c: number) {
        this.numbers = [a, b, c]
    }

    sum(): number {
        return this.numbers.reduce((acc, cur) => acc + cur)
    }

    product(): number {
        return this.numbers.reduce((acc, cur) => acc * cur)
    }

    isPythagorean(): boolean {
        const squared = this.numbers.map(num => num ** 2)
        return squared[0] + squared[1] === squared[2]
    }

    static where(a: number, b?: number, c?: number): number[] {
        // not sure of this one
        let B = b
        let C = c
        return [a]
    }
}
