class RaindropConverter {

  String convert(int number) {
    if (number % 3 == 0) {
      return "Pling";
    }

    if (number % 5 == 0) {
      return "Plang";
    }

    if (number % 7 == 0) {
      return "Plong";
    }

    if (!(number % 7 == 0) && !(number % 5 == 0) && !(number % 7 == 0)) {
      String to_return = Integer.toString(number);
      return to_return;
    }
    return "";
  }

}