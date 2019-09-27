export default class Matrix {

    rows: number[][] = []
    columns: number[][] = []

    constructor(matrix: string) {

        const splitAtLineBreak: string[] = matrix.split(/\n/)

        // build rows
        for (let i = 0; i < splitAtLineBreak.length; i++) {
            const splitSpaces: string[] = splitAtLineBreak[i].split(/ /)
            const splitNums: number[] = splitSpaces.map(num => parseInt(num))
            this.rows.push(splitNums)
        }



        for (let i = 0; i < this.rows.length; i++) { // for each row
            for (let j = this.rows[i].length - 1; j >= 0; j--) { // for each column (in array index number)

            }
        }

    }

}
