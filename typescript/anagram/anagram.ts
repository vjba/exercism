export default class Anagram {

    word: string

    constructor(word: string) {
        this.word = word.toUpperCase()
    }

    matches(...words: string[]): string[] {
        let anagrams: string[] = []

        words.forEach(word => {
            if (word.toUpperCase() !== this.word) {

                const testWord = Array.from(word).map(el => el.toUpperCase()).sort()
                const inputWord = Array.from(this.word).sort()

                if (testWord.length === inputWord.length) {
                    if (testWord.every((letter, index) => inputWord[index] === letter)) { anagrams.push(word) }
                }
            }
        })
        return anagrams
    }
}
