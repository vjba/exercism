export default class Clock {

    totalMinutes: number
    hours: number = 0
    minutes: number = 0

    constructor(hours: number, minutes?: number) {
        this.totalMinutes = (hours * 60) + (minutes || 0)
        this.calculateTime()
    }

    calculateTime(): void {
        this.hours = Math.floor(this.totalMinutes / 60) % 24
        if (this.hours < 0) { this.hours += 24 }

        this.minutes = this.totalMinutes % 60
        if (this.minutes < 0) { this.minutes += 60 }
    }

    plus(minutes: number): string {
        this.totalMinutes += minutes
        this.calculateTime()
        return this.toString()
    }

    minus(minutes: number): string {
        this.totalMinutes -= minutes
        this.calculateTime()
        return this.toString()
    }

    equals(newClock: Clock): boolean {
        return this.toString() === newClock.toString()
    }

    toString() {
        return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`
    }
}
