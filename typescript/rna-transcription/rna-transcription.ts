export default class Transcriptor {

    toRna(dnaNucleotide: string): string {
        const dna: string[] = dnaNucleotide.split('')
        let rna: string[] = []
        let invalid: boolean = false

        dna.forEach(n => {
            n === 'A' ? rna.push('U') :
                n === 'C' ? rna.push('G') :
                    n === 'G' ? rna.push('C') :
                        n === 'T' ? rna.push('A') :
                            invalid = true
            if (invalid) { throw new Error('Invalid input DNA.') }
        });
        return rna.join('')
    }
}