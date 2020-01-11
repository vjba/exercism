class ReverseString {

  String reverse(String inputString) {
    String result = "";

    if (inputString != null) {
      for (int i = inputString.length(); i >= 1; i--) {
        result = result + inputString.charAt(i);
      }
    } else {
      return result;
    }
    return result;
  }
}