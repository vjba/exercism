class DifferenceOfSquaresCalculator {

  int computeSquareOfSumTo(int input) {
    int to_return = input;
    while (true) {
      if (input == 0) {
        return to_return * to_return;
      }

      to_return = to_return + (input - 1);
      input = input - 1;
    }
  }

  int computeSumOfSquaresTo(int input) {
    int to_return = input;
    while (true) {
      if (input == 0) {
        return to_return;
      }

      to_return = to_return + (input * input);
      input = input - 1;
    }
  }

  int computeDifferenceOfSquares(int input) {
    return computeSquareOfSumTo(input) - computeSumOfSquaresTo(input);
  }

}