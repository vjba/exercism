const Proverb = (...words: string[]): string => {
    let proverb = ''
    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) { proverb += `And all for the want of a ${words[0]}.` }
        else { proverb += `For want of a ${words[i]} the ${words[i + 1]} was lost.\n` }
    }
    return proverb
}

export default Proverb
