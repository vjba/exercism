class Acronym {

  String phrase;
  String result = "";

    Acronym(String phrase) {
      if (phrase != null) {
        this.phrase = phrase;
      }
    }

    String get() {
      String word = "";

      while (true) {
        if (phrase.length() == 1) {
          result += word.substring(0,1);
          return result;

        } else if (phrase.substring(0,1).equals(" ")) {
          result += word.toUpperCase().substring(0,1);
          phrase = phrase.substring(1);
          word = "";

        } else {
          word += phrase.substring(0,1);
          phrase = phrase.substring(1);
        }
      }
    }

}