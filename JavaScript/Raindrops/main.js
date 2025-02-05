export const convert = num => {
    let result = '';
    let counter = 0;
    if(num%3===0){
      result+= 'Pling'
    }
    else{
        counter++;
    }
    if(num%5===0){
      result+= 'Plang'
    }
    else{
        counter++;
    }
    if(num%7===0){
      result+= 'Plong'
    }
    else{
        counter++;
    }
    return counter === 3 ? String(num):result;
  };
  