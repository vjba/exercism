export default class RobotName {

    name: string
    usedNames: string[] = []

    constructor() {
        this.name = this.generateName()
    }

    resetName() {
        this.usedNames.push(this.name)
        let newName = this.generateName()

        while (this.usedNames.includes(newName)) {
            newName = this.generateName()
        }

        this.name = newName
    }

    generateName(): string {
        let nameAlpha: string = ''
        for (let i = 0; i < 2; i++) {
            const randInt = Math.round(Math.random() * (90 - 65) + 65)
            nameAlpha += String.fromCharCode(randInt)
        }

        let nameNum: number = 0
        for (let i = 0; i < 3; i++) {
            nameNum = Math.round(Math.random() * (999 - 100) + 100)
        }

        const fullName: string = nameAlpha + nameNum

        return fullName
    }
}
