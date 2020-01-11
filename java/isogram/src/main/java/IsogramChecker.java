import java.util.*;

class IsogramChecker {
    boolean isIsogram(String phrase) {
        String copiedPhrase = phrase.toLowerCase();
        boolean isIsogram = true;
        List listOfChars = new ArrayList();

        while (!copiedPhrase.isEmpty()) {
            char c = copiedPhrase.charAt(0);
            if (!listOfChars.contains(c) || c == ' ' || c == '-') {
                listOfChars.add(c);
                copiedPhrase = copiedPhrase.substring(1);
            } else {
                isIsogram = false;
                break;
            }
        }
        return isIsogram;
    }
}
