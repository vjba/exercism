import java.util.*;

class Scrabble {

  public String word;

  Scrabble(String word) {
    this.word = word.toLowerCase();
  }

  int getScore() {
    Map<String, Integer> map = new HashMap<String, Integer>();
    map.put("a", 1);
    map.put("b", 3);
    map.put("c", 3);
    map.put("d", 2);
    map.put("e", 1);
    map.put("f", 4);
    map.put("g", 2);
    map.put("h", 4);
    map.put("i", 1);
    map.put("j", 8);
    map.put("k", 5);
    map.put("l", 1);
    map.put("m", 3);
    map.put("n", 1);
    map.put("o", 1);
    map.put("p", 3);
    map.put("q", 10);
    map.put("r", 1);
    map.put("s", 1);
    map.put("t", 1);
    map.put("u", 1);
    map.put("v", 4);
    map.put("w", 4);
    map.put("x", 8);
    map.put("y", 4);
    map.put("z", 10);

    int to_return = 0;

    while (true) {
      if (word.isEmpty()) {
        return to_return;
      }
      String c = word.substring(0, 1);
      to_return = to_return + map.get(c);
      word = word.substring(1);
    }
  }

}