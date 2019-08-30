export class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind(): string {
        let result: string = ''
        this.checkIfIllegal()

        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
            result = 'equilateral'
        } else if (this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]) {
            result = 'isosceles'
        } else {
            result = 'scalene'
        }
        return result
    }

    checkIfIllegal(): void {
        for (let i = 0; i < 3; i++) {
            if (this.sides[i] <= 0) {
                throw ''
            } else if (this.isInequal()) {
                throw ''
            }
        }
    }

    isInequal(): boolean {
        let mutatedSides: number[] = [...this.sides]
        mutatedSides.push(mutatedSides[0])
        mutatedSides.push(mutatedSides[1])

        let isInequal: boolean = false
        for (let i = 0; i < 3; i++) {
            if (mutatedSides[i] + mutatedSides[i + 1] < mutatedSides[i + 2]) {
                isInequal = true
            }
        }
        return isInequal
    }
}