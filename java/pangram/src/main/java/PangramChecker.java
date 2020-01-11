public class PangramChecker {

  public boolean isPangram(String input) {
    if (input.isEmpty()) {
      return false;
    } else {
      boolean[] foundChar = new boolean[] {};
      char[] alpha = "abcdefghijklmnopqrstuvwxyz".toCharArray();

      // iterates over input string to check if alpha
      for (int i = 0; i <= input.length(); i++) {
        char c = input.charAt(i);
        if (c >= 97 && c <= 122) {

          for (int j = 0; j <= 26; j++) {
            if (alpha[j] == c) {
              foundChar[j] = true;
            } else {
              foundChar[j] = false;
            }
          }
        }

      }

      int falseCount = 0;
      for (int k = 0; k <= 26; k++) {
        if (foundChar[k] == false) {
          falseCount += 1;
        }
      }
      if (falseCount > 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}