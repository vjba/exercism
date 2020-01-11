class Hamming {

  int hammDist;

  Hamming(String leftStrand, String rightStrand) {
    if (leftStrand != null || rightStrand != null) {
      for (int i = 0; i < leftStrand.length(); i++) {
        char left = leftStrand.charAt(i);
        char right = rightStrand.charAt(i);

        if (left != right) {
          hammDist += 1;
        }
      }
    }
  }

  int getHammingDistance() {
    return hammDist;
  }
}