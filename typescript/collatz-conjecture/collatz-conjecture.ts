class CollatzConjecture {

    static steps(input: number) {
        if (input <= 0) {
            throw new Error('Only positive numbers are allowed')
        }

        let steps: number = 0

        while (input !== 1) {
            input % 2 === 0 ? input = (input / 2) : (input = input * 3 + 1)
            steps += 1
        }
        return steps
    }
}

export default CollatzConjecture