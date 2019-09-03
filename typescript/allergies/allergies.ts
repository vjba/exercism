export default class Allergies {

    allergicItems: string[] = []
    foodItems: { [key: string]: number } = {
        eggs: 1,
        peanuts: 2,
        shellfish: 4,
        strawberries: 8,
        tomatoes: 16,
        chocolate: 32,
        pollen: 64,
        cats: 128,
    }

    constructor(givenScore: number) {
        for (let key in this.foodItems) {
            const foodItemScore = this.foodItems[key]
            if (foodItemScore & givenScore) {
                this.allergicItems.push(key)
            }
        }
    }

    allergicTo(foodItem: string): boolean {
        return this.allergicItems.includes(foodItem)
    }

    list(): string[] {
        return this.allergicItems
    }
}