export const toRna = (DNA) => {
    if(DNA.length > 1){
        let RNA = DNA.split('');
        for(let i = 0; i < DNA.length; i++){
            RNA[i] = toUniqueRNA(RNA[i])
        }
        return RNA.join('');
    }
    else{
        return toUniqueRNA(DNA);
    }
};
function toUniqueRNA(DNA){
    if(DNA == 'G'){
        return 'C';
    }
    else if(DNA == 'C'){
        return 'G';
    }
    else if(DNA == 'T'){
        return 'A';
    }
    else if(DNA == 'A'){
        return 'U';
    }
    else if(DNA == '' || DNA == undefined){
        return '';
    }
}