export default class ArmstrongNumbers {

    static isArmstrongNumber(num: number): boolean {
        const numArray = Array.from(num.toString())

        return numArray.map(num => parseInt(num))
            .map(num => num ** numArray.length)
            .reduce((acc, cur) => acc + cur) === num
    }
}
