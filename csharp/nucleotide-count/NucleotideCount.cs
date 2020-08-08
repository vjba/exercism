using System;
using System.Collections.Generic;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        Dictionary<char, int> nucleotideCount = new Dictionary<char, int>
        {
            { 'A', 0 },
            { 'C', 0 },
            { 'G', 0 },
            { 'T', 0 }
        };

        foreach (char nucleotide in sequence)
        {
            if (nucleotideCount.ContainsKey(nucleotide))
            {
                nucleotideCount[nucleotide]++;
            }
            else
            {
                throw new System.ArgumentException();
            }
        }
        return nucleotideCount;
    }
}
