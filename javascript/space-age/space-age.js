export const age = (planet, seconds) => {
  for (let i = 0; i < PLANETS.length; i++) {
    if (PLANETS[i].planet === planet) {
      return Number((seconds / 60 / 60 / 24 / 365.25 / PLANETS[i].year).toFixed(2))
    }
  }
}

const PLANETS = [
  { planet: 'mercury', year: 0.2408467 },
  { planet: 'venus', year: 0.61519726 },
  { planet: 'earth', year: 1 },
  { planet: 'mars', year: 1.8808158 },
  { planet: 'jupiter', year: 11.862615 },
  { planet: 'saturn', year: 29.447498 },
  { planet: 'uranus', year: 84.016846 },
  { planet: 'neptune', year: 164.79132 }
]
