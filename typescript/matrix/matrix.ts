type twoD = number[][]

export default class Matrix {

    rows: twoD = []
    columns: twoD = []

    constructor(matrix: string) {

        const splitAtLineBreak: string[] = matrix.split(/\n/)

        for (let i = 0; i < splitAtLineBreak.length; i++) {
            const splitSpaces: string[] = splitAtLineBreak[i].split(/ /)
            const splitNums: number[] = splitSpaces.map(num => parseInt(num))
            this.rows.push(splitNums)
        }

        // TODO
        // Column builder
    }

}
