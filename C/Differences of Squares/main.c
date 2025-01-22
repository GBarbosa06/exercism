#include "difference_of_squares.h"
#include <stdio.h>
unsigned int sum_of_squares(unsigned int number)
{
    unsigned int sumOfSquares = 0;
    unsigned int square;
    for(unsigned int i = 1; i <= number; i++)
    {
        square = i * i;
        sumOfSquares += square;
    }
    printf("%d", sumOfSquares);
    return sumOfSquares;
}
unsigned int square_of_sum(unsigned int number)
{
    unsigned int sum = 0;
    unsigned int square;
    for(unsigned int i = 1; i <= number; i++)
    {
        sum += i;
    }
    square = sum*sum;
    printf("%d", square);
    return square;
}
unsigned int difference_of_squares(unsigned int number)
{
    printf("%d", (square_of_sum(number) - sum_of_squares(number)));
    return (square_of_sum(number)- sum_of_squares(number));
}