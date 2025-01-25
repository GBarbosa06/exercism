#include "queen_attack.h"

attack_status_t can_attack(position_t queen_1, position_t queen_2)
{
      if(queen_1.row > 7 || queen_1.column > 7 || queen_2.row > 7 || queen_2.column > 7 || (queen_1.row == queen_2.row && queen_1.column == queen_2.column))
      {
        return 2;
      }
      if ((queen_1.row == queen_2.row) || (queen_1.column == queen_2.column) || (isInDiagonal(queen_1, queen_2) == 1))
      {
        return 1;
      }
      else
      {
        return 0;
      }
      
}

int isInDiagonal(position_t queen_1, position_t queen_2)
{
    position_t reference_queen;
    reference_queen.row = queen_1.row;
    reference_queen.column = queen_1.column;

    for (int i = 0; i < 7; i++)
    {
        reference_queen.row++;
        reference_queen.column--;
        if (reference_queen.row == queen_2.row && reference_queen.column == queen_2.column)
        {
            return 1;
        }
        
    }
    
    reference_queen.row = queen_1.row;
    reference_queen.column = queen_1.column;

    for (int i = 0; i < 7; i++)
    {
        reference_queen.row++;
        reference_queen.column++;
        if (reference_queen.row == queen_2.row && reference_queen.column == queen_2.column)
        {
            return 1;
        }
        
    }

    reference_queen.row = queen_1.row;
    reference_queen.column = queen_1.column;

    for (int i = 0; i < 7; i++)
    {
        reference_queen.row--;
        reference_queen.column--;
        if (reference_queen.row == queen_2.row && reference_queen.column == queen_2.column)
        {
            return 1;
        }
        
    }

    reference_queen.row = queen_1.row;
    reference_queen.column = queen_1.column;

    for (int i = 0; i < 7; i++)
    {
        reference_queen.row--;
        reference_queen.column++;
        if (reference_queen.row == queen_2.row && reference_queen.column == queen_2.column)
        {
            return 1;
        }
        
    }
    return 0;
    
}