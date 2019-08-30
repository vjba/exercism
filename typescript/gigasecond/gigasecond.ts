export default class Gigasecond {

    givenDate: Date

    constructor(givenDate: Date) {
        this.givenDate = givenDate
    }

    date(): Date {
        return new Date(Number(this.givenDate) + 1e12)
    }
}