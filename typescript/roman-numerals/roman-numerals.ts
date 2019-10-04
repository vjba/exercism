export default class RomanNumerals {

  static roman(decimal: number) {

    const values: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }

    let numerals: string = ''

    while (decimal > 0) {

      for (const key in values) {
        if (decimal - values[key] >= 0) {
          numerals += key
          decimal -= values[key]
          break
        }
      }
    }
    return numerals
  }
}
