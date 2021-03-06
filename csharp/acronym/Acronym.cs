using System;

public static class Acronym
{
    private static string _alphabet = "abcdefghijklmnopqrstuvwxyz";
    private static char[] _seperators = { ' ', '-', ',', '_' };
    public static string Abbreviate(string phrase)
    {
        string[] words = phrase.Split(_seperators, StringSplitOptions.RemoveEmptyEntries);
        string abbreviation = "";

        foreach (var word in words)
        {
            string trimmed = word.Trim(_seperators);
            abbreviation = abbreviation + trimmed[0];
        }

        return abbreviation.ToUpper();
    }
}
