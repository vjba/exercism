export default class Luhn {

    static valid(input: string): boolean {
        if (input.length === 1) {
            return false
        }

        const regex: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        const iterated: number[] = Array.from(input)
            .reverse()
            .filter(char => regex.indexOf(Number(char)) === -1 ? false : true)
            .map(Number)
            .map((num, i) => i % 2 !== 0 ? num * 2 : num)
            .map((num) => num > 9 ? num - 9 : num)

        const sum: number = iterated.reduce((sum, num) => sum + num)

        if (sum === 0) {
            return false
        } else {
            if (sum % 10 === 0) {
                return true
            } else {
                return false
            }
        }
    }
}