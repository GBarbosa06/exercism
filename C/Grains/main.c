#include "grains.h"

uint64_t square(uint8_t index)
{
     return pow(2, index-1);
}

uint64_t total(void)
{
    uint64_t counter = 0;
    uint64_t currentGrains = 1;

    for (int i = 0; i < 64; i++)
    {
        counter += currentGrains;
        currentGrains *= 2;
    }
    return counter;
}
