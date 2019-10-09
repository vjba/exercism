import { isNumber } from "util"

export default class RunLengthEncoding {
    static encode(data: string): string {

        const dataArray = Array.from(data)
        let encoded = ''
        let count = 1

        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] === dataArray[i + 1]) {
                count += 1
            } else {
                if (count === 1) {
                    encoded += dataArray[i]
                } else {
                    encoded += count + dataArray[i]
                    count = 1
                }
            }
        }

        return encoded
    }

    static decode(data: string): string {

        let count = ''
        let decoded = ''

        for (let char of data) {
            if (char.match(/\d/)) {
                count += char
            } else {
                decoded += count ? char.repeat(parseInt(count, 10)) : char
                count = ''
            }
        }
        return decoded
    }
}
