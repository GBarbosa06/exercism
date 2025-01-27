export function decodedValue(colorBands)
{
    let n1 = String(decodeNumber(colorBands[0]));
    let n2 = String(decodeNumber(colorBands[1]));
    let n3 = n1 + n2;
  return Number(n3);
}

const decodeNumber = (color) => {
    let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    let n = 1;

    for(let i = 0; i <= 9; i++)
    {
        if(colors[i] == color)
        {
            n = i;
        }
    }
    return n;
}