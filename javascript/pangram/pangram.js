const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let stringCodeTotal, alphabetCodeTotal

export const isPangram = (string) => {
  const lowerCaseString = string.toLowerCase()
  const sanitizedString = lowerCaseString.match(/[a-z]/g)

  stringCodeTotal = asciiTotal(sanitizedString)
  alphabetCodeTotal = asciiTotal(alphabet)
  console.log(stringCodeTotal + ' ||| ' + alphabetCodeTotal)
}

const asciiTotal = (sanitizedString) => {
  let asciiTotal = 0
  for (let i = 0; i < sanitizedString.length; i++) {
    asciiTotal += sanitizedString.charCodeAt(i)
  }
  return asciiTotal
}

isPangram('ewrworhgwoeg')
