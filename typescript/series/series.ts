export default class Series {

    digits: number[]

    constructor(data: string) {
        this.digits = Array.from(data, s => parseInt(s))
    }

    slices(size: number): number[][] {
        if (size > this.digits.length) { throw Error }
        let slices: number[][] = []

        for (let i = 0; i < this.digits.length; i++) {
            let segment: number[] = []

            for (let j = 0; j < size; j++) {
                segment.push(this.digits[i + j])
            }
            slices.push(segment)
            if (this.digits[i + size] === undefined) { break }
        }
        return slices
    }
}
