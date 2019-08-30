export const toRna = (DNA) => {

  let rna = ''

  for (let i = 0; i < DNA.length; i++) {
    switch (DNA[i]) {
      case 'A':
        rna += 'U'
        break
      case 'C':
        rna += 'G'
        break
      case 'G':
        rna += 'C'
        break
      case 'T':
        rna += 'A'
        break
      case '':
        break
    }
  }

  return rna
};
