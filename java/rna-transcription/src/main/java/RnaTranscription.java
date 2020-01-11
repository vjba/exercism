class RnaTranscription {

    String transcribe(String dnaStrand) {
      String rna = "";

      for (int i = 0; i < dnaStrand.length(); i++)  {
        char letter = dnaStrand.charAt(i);
        if (letter == 'G') {
          rna += 'C';
        } else if (letter == 'C') {
          rna += 'G';
        } else if (letter == 'T') {
          rna += 'A';
        } else if (letter == 'A') {
          rna += 'U';
        }
      }
      return rna;
    }
}