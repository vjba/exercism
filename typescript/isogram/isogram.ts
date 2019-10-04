export default class Isogram {

    static isIsogram(input: string): boolean {

        const sanitized: string = input.replace(/[- ]/, '').toUpperCase()
        let list: string[] = []
        let isogram = true

        Array.from(sanitized).forEach(letter => {
            if (list.includes(letter)) { isogram = false }
            list.push(letter)
        });

        return isogram
    }
}
