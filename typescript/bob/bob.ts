export default class Bob {

    hey(sentence: string): string {

        const sanitizedSentence = sentence.replace(/[^A-Za-z0-9?]/g, '')
        let response = ''

        if (sanitizedSentence === '') {
            response = 'Fine. Be that way!'
        } else {
            let question = false
            sanitizedSentence[sanitizedSentence.length - 1] === '?' ? question = true : null

            const sentenceArray = Array.from(sanitizedSentence.replace(/[^A-Za-z]/g, ''))

            if (sentenceArray.every(char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) && sentenceArray.length > 0) {
                question ? response = 'Calm down, I know what I\'m doing!' : response = 'Whoa, chill out!'

            } else if (question) {
                response = 'Sure.'

            } else {
                response = 'Whatever.'
            }
        }
        return response
    }
}
