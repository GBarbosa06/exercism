const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
}
export const toRna = (DNA) => {
    let RNA = DNA.split('').map((n) => dnaToRna[n])
    return RNA.join('');
    
};