export default class ISBN {

    isbn: number[]

    constructor(isbn: string) {
        this.isbn = Array.from(isbn)
            .filter(el => (/[0-9X]/).test(el))
            .map((el, idx) => {
                if (el === 'X' && idx === 9) { return 10 }
                return parseInt(el)
            })
    }

    isValid(): boolean {
        let multiplier = 10
        let total = 0
        for (let num of this.isbn) {
            total += num * multiplier
            multiplier -= 1
        }
        return total % 11 === 0 && this.isbn.length === 10
    }
}
