export default class Squares {

    input: number
    squareOfSum: number
    sumOfSquares: number
    difference: number

    constructor(input: number) {
        this.input = input
        this.squareOfSum = this.sqOfSum()
        this.sumOfSquares = this.sumOfSq()
        this.difference = this.diff()
    }

    sqOfSum(): number {
        let sum: number = 0
        for (let i = 1; i <= this.input; i++) {
            sum += i
        }
        return Math.pow(sum, 2)
    }

    sumOfSq(): number {
        let sum: number = 0
        for (let i = 1; i <= this.input; i++) {
            sum += Math.pow(i, 2)
        }
        return sum
    }

    diff(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}