const discount = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25
};

const BOOK_PRICE = 800; 

function calcGroupCost(size) {
  return size * BOOK_PRICE * (1 - discount[size]);
}

function findMinCost(basket, memo = {}) {
  const key = basket.join(","); 
  if (memo[key] !== undefined) return memo[key]; 
  if (basket.every(count => count === 0)) return 0; 
  let minCost = Infinity;

  for (let size = 5; size >= 1; size--) {
    const group = [];

    for (let i = 0; i < basket.length && group.length < size; i++) {
      if (basket[i] > 0) {
        group.push(i);
      }
    }

    if (group.length === size) {
      const newBasket = [...basket];
      for (let index of group) {
        newBasket[index]--;
      }

      minCost = Math.min(
        minCost, calcGroupCost(size) + findMinCost(newBasket, memo)
      );
    }
  }

  memo[key] = minCost;
  return minCost;
}

export function cost(books) {
  const basket = [0, 0, 0, 0, 0];
  
  for (let book of books) {
    basket[book - 1]++;
  }

  return findMinCost(basket);
}