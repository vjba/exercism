export default class Pangram {

    input: string[]

    constructor(input: string) {
        this.input = Array.from(input.replace(/[^A-Za-z]/g, '').toUpperCase())
    }

    isPangram(): boolean {
        const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        let isPangram = true

        for (const letter of alphabet) {
            this.input.includes(letter) ? null : isPangram = false
        }

        return isPangram
    }
}