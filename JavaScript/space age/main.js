const periodsInEarthYears = [
    {planet:'mercury',	periods: 0.2408467},
    {planet:'venus',	periods: 0.61519726},
    {planet:'earth',	periods: 1.0},
    {planet:'mars',	    periods: 1.8808158},
    {planet:'jupiter',	periods: 11.862615},
    {planet:'saturn',	periods: 29.447498},
    {planet:'uranus',	periods: 84.016846},
    {planet:'neptune',	periods: 164.79132}
]

export const age = (planetReceived, seconds) => {
    let ageInEarth = ((((seconds/60)/60)/24)/365.25)
    let period = periodsInEarthYears.find(iPlanet => iPlanet.planet === planetReceived)
    return Number((ageInEarth/period.periods).toFixed(2))
  };