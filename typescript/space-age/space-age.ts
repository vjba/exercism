export default class SpaceAge {

    seconds: number
    PLANETS: { [key: string]: number } = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 1,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    }

    constructor(seconds: number) {
        this.seconds = seconds
    }

    calculateAge(planet: number): number {
        return Number((this.seconds / 60 / 60 / 24 / 365.25 / planet).toFixed(2))
    }

    onEarth(): number {
        return this.calculateAge(this.PLANETS.earth)
    }
    onMercury(): number {
        return this.calculateAge(this.PLANETS.mercury)
    }
    onVenus(): number {
        return this.calculateAge(this.PLANETS.venus)
    }
    onMars(): number {
        return this.calculateAge(this.PLANETS.mars)
    }
    onJupiter(): number {
        return this.calculateAge(this.PLANETS.jupiter)
    }
    onSaturn(): number {
        return this.calculateAge(this.PLANETS.saturn)
    }
    onUranus(): number {
        return this.calculateAge(this.PLANETS.uranus)
    }
    onNeptune(): number {
        return this.calculateAge(this.PLANETS.neptune)
    }
}