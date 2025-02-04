/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch(name){
        case 'Pure Strawberry Joy':
            return 0.5;
            break;
        case 'Energizer': case 'Green Garden':
            return 1.5;
            break;
        case 'Tropical Island' :
            return 3;
            break;
        case 'All or Nothing':
            return 5;
            break;
      default:
        return 2.5;
        break;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  const wedgesByLimes = {
    'small': 6,
    'medium': 8,
    'large': 10,
  }
  export function limesToCut(wedgesNeeded, limes) {
    let wedgesCounter = 0;
    
    let i = 0
    while(wedgesCounter < wedgesNeeded){
      wedgesCounter += wedgesByLimes[limes[i]]
      if(i === limes.length)break;
      i++
    }
    return i;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    while(timeLeft > 0){
        timeLeft -= timeToMixJuice(orders[0])
        orders.shift();
    }
    return orders;
  }
  