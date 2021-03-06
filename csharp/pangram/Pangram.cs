using System;
using System.Collections.Generic;

public static class Pangram
{
    private static string _alphabet = "abcdefghijklmnopqrstuvwxyz";
    public static bool IsPangram(string input)
    {
        foreach (char letter in _alphabet)
        {
            if (!input.ToLower().Contains(letter))
            {
                return false;
            }
        }
        return true;
    }
}
