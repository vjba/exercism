export default class PerfectNumbers {

    static classify(input: number): string {
        if (input <= 0) {
            throw new Error('Classification is only possible for natural numbers.')
        }
        const factors: number[] = this.getFactorsOf(input)
        const sum = factors.reduce((a, b) => a + b, 0)
        let res: string = ''
        sum === input ? res = 'perfect' :
            sum > input ? res = 'abundant' :
                sum < input ? res = 'deficient' :
                    false
        return res
    }

    static getFactorsOf(input: number): number[] {
        let factors: number[] = []
        for (let i = 1; i < input; i++) {
            if (Number.isSafeInteger(input / i) && i !== input) {
                factors.push(i)
            }
        }
        return factors
    }

}