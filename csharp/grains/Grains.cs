using System;
using System.Numerics;

public static class Grains
{
    public static BigInteger Square(int n) => (n < 1 || n > 64) ? throw new ArgumentOutOfRangeException() : BigInteger.Pow(2, n - 1);
    public static BigInteger Total() => BigInteger.Pow(2, 64) - 1;
}
