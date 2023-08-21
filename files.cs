using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Digite o primeiro número:");
        string input1 = Console.ReadLine(); // Lê o primeiro número como uma string
        double number1 = Convert.ToDouble(input1); // Converte a string para um número

        Console.WriteLine("Digite o segundo número:");
        string input2 = Console.ReadLine(); // Lê o segundo número como uma string
        double number2 = Convert.ToDouble(input2); // Converte a string para um número

        double sum = number1 + number2; // Calcula a soma

        Console.WriteLine("A soma dos números é: " + sum);
    }
}
