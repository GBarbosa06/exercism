/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return (ratePerHour * 8);
  }
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget: the total budget
   * @param {number} ratePerHour: the rate per hour
   * @returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
  }
  /**
   * Calculates the discounted rate for large projects, rounded up
   *
   * @param {number} ratePerHour
   * @param {number} numDays: number of days the project spans
   * @param {number} discount: for example 20% written as 0.2
   * @returns {number} the rounded up discounted rate
   */
  export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let fullyMonths = Math.floor(numDays/22);
    let dayRatef = dayRate(ratePerHour);
    let monthRate = dayRatef * 22;
    let monthlyDiscount = monthRate * discount
    let fullyMonthRate = monthRate - monthlyDiscount;
    let restOfDays = numDays%22;
    let total = 0;
    for(let i = 0; i < fullyMonths; i++)
      {
        total += fullyMonthRate;
      }
    total += (restOfDays*dayRatef);
    return Math.ceil(total);  
  }

  //nesse caso usei um laço for, porém por ser um desconto não acumulável, também dá pra completar fazendo uma aplicação de desconto simples, o que usaria menos memória, mas essa foi minha primeira resolução