const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) 
{
  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
}

export function preparationTimeInMinutes(numberOfLayers) 
{
  return (numberOfLayers * 2);
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) 
{
    //throw new Error('Remove this line and implement the function');
    let timePreparing;
    timePreparing = preparationTimeInMinutes(numberOfLayers);
    return timePreparing + actualMinutesInOven;
  }