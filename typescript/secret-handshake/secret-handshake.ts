export default class HandShake {
    num: number
    shake: { [key: string]: number } = {
        'wink': 1,
        'double blink': 2,
        'close your eyes': 4,
        'jump': 8,
        'reverse': 16
    }

    constructor(num: number) {
        this.num = num
    }

    commands(): string[] {
        let commands: string[] = []
        for (let key in this.shake) {
            const num = this.shake[key]
            if (this.num & num) {
                commands.push(key)
            }
        }

        if (commands.includes('reverse')) {
            commands.pop()
            return commands.reverse()
        }
        return commands
    }
}
