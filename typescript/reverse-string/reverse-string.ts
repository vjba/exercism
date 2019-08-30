export default class ReverseString {

    static reverse(input: string): string {
        return input.split('').reverse().join('')
    }
}
