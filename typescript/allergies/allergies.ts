export default class Allergies {

    allergyscore: Uint8Array

    constructor(allergyScore: number) {
        this.allergyscore = new Uint8Array(allergyScore)
    }

    allergicTo(item: string): boolean {
        return false
    }

    list(): string[] {
        return ['']
    }
}

// takes allergy score
// takes item name
// gets item points
// checks binary points for item points 
// 