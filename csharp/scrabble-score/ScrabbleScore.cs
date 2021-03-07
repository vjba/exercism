using System;
using System.Collections.Generic;

public static class ScrabbleScore
{
    public static int Score(string input)
    {
        Dictionary<char, int> letterScores = new Dictionary<char, int>();
        string[] letters = { "AEIOULNRST", "DG", "BCMP", "FHVWY", "K", "JX", "QZ" };
        int[] scores = { 1, 2, 3, 4, 5, 8, 10 };

        for (int i = 0; i < letters.Length; i++)
        {
            foreach (char letter in letters[i])
            {
                letterScores.Add(letter, scores[i]);
            }
        }

        int score = 0;

        foreach (char letter in input)
        {
            score += letterScores.GetValueOrDefault(Char.ToUpper(letter));
        }

        return score;
    }
}
