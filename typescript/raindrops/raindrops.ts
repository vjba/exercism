export default class Raindrops {

    convert(input: number): string {

        let output: string[] = []

        for (let i = 1; i < input + 1; i++) {
            if (Number.isSafeInteger(input / i)) {
                i == 3 ? output.push('Pling') :
                    i == 5 ? output.push('Plang') :
                        i == 7 ? output.push('Plong') : console
            }
        }

        if (output.length === 0) {
            output.push(input.toString())
        }

        return output.join('')
    }
}