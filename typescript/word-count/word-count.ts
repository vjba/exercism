export default class Words {

    count(words: string) {
        let wordMap = new Map<any, number>()
        const lowerWords = words.toLowerCase()
        const splitWords = lowerWords.split(/[\t\n\r \s]+/gm)

        for (let i = 0; i < splitWords.length; i++) {
            if (wordMap.has(splitWords[i])) {
                const currentValue = wordMap.get(splitWords[i])
                wordMap.delete(splitWords[i])
                wordMap.set(splitWords[i], Number(currentValue) + 1)
            } else {
                wordMap.set(splitWords[i], +1)
            }
        }
        return wordMap;
    }
}