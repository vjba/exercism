export default class ProteinTranslation {

    static proteins(inputRNA: string): string[] {

        const inputCodons: string[] = <string[]>inputRNA.match(/.{1,3}/g)

        const codonLibrary = [
            { protein: 'Methionine', codons: ['AUG'] },
            { protein: 'Phenylalanine', codons: ['UUU', 'UUC'] },
            { protein: 'Leucine', codons: ['UUA', 'UUG'] },
            { protein: 'Serine', codons: ['UCU', 'UCC', 'UCA', 'UCG'] },
            { protein: 'Tyrosine', codons: ['UAU', 'UAC'] },
            { protein: 'Cysteine', codons: ['UGU', 'UGC'] },
            { protein: 'Tryptophan', codons: ['UGG'] },
            { protein: 'STOP', codons: ['UAA', 'UAG', 'UGA'] }
        ]

        let proteinResult: string[] = []

        nestedLoop:
        for (let i = 0; i < inputCodons.length; i++) {
            for (let j = 0; j < codonLibrary.length; j++) {
                for (let k = 0; k < codonLibrary[j].codons.length; k++) {
                    if (inputCodons[i] === codonLibrary[j].codons[k] && codonLibrary[j].protein === 'STOP') {
                        break nestedLoop
                    } else if (inputCodons[i] === codonLibrary[j].codons[k]) {
                        proteinResult.push(codonLibrary[j].protein)
                    }
                }
            }
        }
        return proteinResult
    }
}