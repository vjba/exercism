export default class PhoneNumber {

    phoneNumber: string[]

    constructor(phoneNumber: string) {
        this.phoneNumber = Array.from(phoneNumber)
    }

    number(): string | undefined {
        let sanitized: string[] = this.phoneNumber.filter(char => (/[0-9]/).test(char))
        if (sanitized.length === 11 && parseInt(sanitized[0]) === 1) {
            sanitized.shift()
            return sanitized.join('')
        }
        return undefined
    }
}
