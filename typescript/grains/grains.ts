export default class Grains {

    static totalGrains: number = 0

    static square(square: number): number {
        if (square <= 0 || square > 64) { throw Error }

        let grains = 1
        let count = 1
        this.totalGrains += grains

        while (count !== square) {
            grains = grains * 2
            count++
            this.totalGrains += grains
        }

        return grains
    }

    static total(): number { // failing
        return (2 ** 64) - 1
    }
}
