export const compute = (s1, s2) => {
    const array1 = s1.split(''); 
    const array2 = s2.split(''); 
    let hammingCounter = 0;
    if(array1.length != array2.length){
      throw new Error('strands must be of equal length');
    }
    for(let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        hammingCounter++;
      }
    }
    return hammingCounter;
  };
  