using System;

public static class ResistorColor
{
    private static string[] colours = { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };
    public static int ColorCode(string color)
    {
        for (int i = 0; i < colours.Length; i++)
        {
            if (color == colours[i])
            {
                return i;
            }
        }
        return 0;
    }

    public static string[] Colors()
    {
        return colours;
    }
}
