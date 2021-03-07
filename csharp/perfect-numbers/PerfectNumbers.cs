using System;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    public static Classification Classify(int number)
    {
        int minimumNumber = 1;
        int sumOfFactors = 0;
        Classification classification = new Classification();

        if (number < minimumNumber)
        {
            throw new ArgumentOutOfRangeException();
        }

        for (int i = minimumNumber; i < number - 1; i++)
        {
            if (number % i == 0)
            {
                sumOfFactors += i;
            }
        }

        if (sumOfFactors < number)
        {
            classification = Classification.Deficient;
        }
        else if (sumOfFactors == number)
        {
            classification = Classification.Perfect;
        }
        else if (sumOfFactors > number)
        {
            classification = Classification.Abundant;
        }

        return classification;
    }
}
