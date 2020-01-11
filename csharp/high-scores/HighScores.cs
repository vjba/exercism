using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    public List<int> highScores;

    public HighScores(List<int> list) => this.highScores = list;

    public List<int> Scores() => this.highScores;

    public int Latest() => this.highScores.LastOrDefault();

    public int PersonalBest() => this.highScores.Max();

    public List<int> PersonalTopThree()
    {
        List<int> topThree = this.highScores;
        topThree.Sort();
        topThree.Reverse();

        if (topThree.Count <= 3) return topThree;

        return topThree.GetRange(0, 3);
    }
}
