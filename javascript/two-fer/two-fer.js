export function twoFer(name) {

    if (name === undefined) {
        return addString('you')
    } else {
        return addString(name)
    }
}

function addString(word) {
    return 'One for ' + word + ', one for me.'
}