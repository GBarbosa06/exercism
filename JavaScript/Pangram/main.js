const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (str) => {
    const strToLower = str.toLowerCase;
    return alphabet.every(letter => strToLower.includes(letter));
  };