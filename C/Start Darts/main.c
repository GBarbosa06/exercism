#include "darts.h"


int score(coordinate_t landing_position)
{
    float D;
    float x = landing_position.x;
    float y = landing_position.y;
    D = sqrt(x*x + y*y);

    if (D <= 1) 
    {
        return 10;
    }
    else if (D <= 5)
    {
        return 5;
    }
    else if (D <= 10)
    {
        return 1;
    }
    else
    {
        return 0;
    }
    
    
    
}