using System.Collections.Generic;

public static class Isogram
{
    private static string _alphabet = "abcdefghijklmnopqrstuvwxyz";

    public static bool IsIsogram(string word)
    {
        word = word.ToLower();
        HashSet<char> hashset = new HashSet<char>();

        foreach (char letter in word)
        {
            if (_alphabet.Contains(letter))
            {
                if (!hashset.Add(letter))
                {
                    return false;
                }
            }
        }
        return true;
    }
}
