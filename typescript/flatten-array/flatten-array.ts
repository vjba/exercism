export default class FlattenArray {

    static flatten(arr: any[]): number[] {
        return arr.flat(6).filter(el => (/[0-9]/).test(el))
    }

}
