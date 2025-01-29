/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let counter = 0;
    for (const passaro of birdsPerDay){
        counter += passaro;
    }
    return counter;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let n = {
        start: (week-1)*7,
        end: week*7-1,
    }
    let counter = 0;
    for(let i = n.start; i <= n.end; i++){
        counter += birdsPerDay[i];
    }
    return counter;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for(let i = 0; i < birdsPerDay.length; i++){
        birdsPerDay[i]++;
        i++;
    }
    return birdsPerDay;
  }