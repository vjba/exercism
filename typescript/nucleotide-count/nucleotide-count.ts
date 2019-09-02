export default class NucleotideCount {

  static nucleotideCounts(nucleotides: string) {

    let count = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    }

    for (let i = 0; i < nucleotides.length; i++) {
      let invalid: boolean = false
      nucleotides[i] === 'A' ? count.A += 1 :
        nucleotides[i] === 'C' ? count.C += 1 :
          nucleotides[i] === 'G' ? count.G += 1 :
            nucleotides[i] === 'T' ? count.T += 1 :
              invalid = true
      if (invalid) { throw new Error('Invalid nucleotide in strand.') }
    }
    return count
  }
}