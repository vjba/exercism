using System;
using System.Collections.Generic;

public class Robot
{
    public static List<string> _nameList = new List<string>();
    public string _name;
    public string Name
    {
        get
        {
            if (_name == null)
            {
                _name = GenerateNewName();
                return _name;
            }
            else
            {
                return _name;
            }
        }
    }

    public string GenerateNewName()
    {
        string name = $"{GetRandomChars()}{GetRandomInts()}";

        while (_nameList.Contains(name))
        {
            name = $"{GetRandomChars()}{GetRandomInts()}";
        }
        _nameList.Add(name);
        return name;
    }

    public void Reset()
    {
        _name = GenerateNewName();
    }

    private string GetRandomChars(int? numberOfChars = 2)
    {
        char[] chars = new char[(int)numberOfChars];

        for (int i = 0; i < numberOfChars; i++)
        {
            chars[i] = (char)new Random().Next(64, 90);
        }
        return string.Join("", chars);
    }

    private string GetRandomInts(int? numberOfInts = 3)
    {
        int[] ints = new int[(int)numberOfInts];

        for (int i = 0; i < numberOfInts; i++)
        {
            ints[i] = new Random().Next(0, 9);
        }
        return string.Join("", ints);
    }
}
