const discount = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25
}

//param: array
function calcGroupCost(group) {
  let cost = 0;
  let uniqueBooks = group.filter(book => book !== 0).length
  cost = 800 * uniqueBooks;
  cost *= (1-discount[uniqueBooks])
  return cost;
}

export const cost = (books) => {
  const basket = [0, 0, 0, 0, 0];
  let group = [0, 0, 0, 0, 0];
  let costCounter = 0;
  for (let book of books) {
    basket[book - 1]++;
  }
  while (basket.some(book => book !== 0)) {
    group = [0, 0, 0, 0, 0]
    for (let i = 0; i < 5; i++) {
      if (basket[i] !== 0) {
        group[i]++;
        basket[i]--;
        
      }
    }
    costCounter += calcGroupCost(group);
    
  }
  return costCounter;
};