export default class Bob {

    hey(sentence: string): string {

        sentence = sentence.replace(/[^A-Za-z,?]/g, '')

        let response = ''

        if (sentence.length === 0) {
            response = 'Fine. Be that way!'

        } else if ((/^,+$/g).test(sentence)) { // hacky workaround
            response = 'Whatever.'

        } else if ((/^[A-Z,]+$/g).test(sentence)) {
            response = 'Whoa, chill out!'

        } else if ((/^[A-Z0-9]+\?{1}$/g).test(sentence)) {
            response = 'Calm down, I know what I\'m doing!'

        } else if (/\?{1}$/g.test(sentence)) {
            response = 'Sure.'

        } else {
            response = 'Whatever.'
        }
        return response
    }
}
