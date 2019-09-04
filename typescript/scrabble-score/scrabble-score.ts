import { isString } from "util";

type lsMap = { [key: string]: number }
type lsOld = { [key: string]: string[] }

const data: lsOld = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
}

function convert(input: lsOld): lsMap {
    const keys = Object.keys(input)
    let lsMap: lsMap = {}

    keys.forEach(key => {
        const value = parseInt(key)
        input[value].map((el) => el.toLowerCase()).forEach(key => {
            lsMap[key] = value
        })
    });
    return lsMap
}

export default function score(input: string | undefined) {
    let score = 0
    if (input === null || input === '') {
        return 0
    } else if (isString(input)) {
        const letterScores: lsMap = convert(data)

        for (let i = 0; i < input.length; i++) {
            for (let key in letterScores) {
                key === input.toLowerCase()[i] ? score += letterScores[key] : false
            }
        }
    }
    return score
}