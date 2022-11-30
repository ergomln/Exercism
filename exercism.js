/*
        SPACE AGE
Given an age in seconds, calculate how old someone would be on:
- Mercury: orbital period 0.2408467 Earth years
- Venus: orbital period 0.61519726 Earth years
- Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
- Mars: orbital period 1.8808158 Earth years
- Jupiter: orbital period 11.862615 Earth years
- Saturn: orbital period 29.447498 Earth years
- Uranus: orbital period 84.016846 Earth years
- Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
*/

const age = (planet, ageInSeconds) => {
    let earthInSeconds = 31557600
    
    const planets = {
    earth : 1,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132
    }
    for (const planett in planets){
        if (planett == planet){
        let yearInSeconds = earthInSeconds * planets[planett]
        return Number((ageInSeconds / yearInSeconds).toFixed(2))
        }
    }
};

/*
        GIGASECONDS
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.
*/

const GIGASECOND = 1e12;
export const gigasecond = (date) => {
    return new Date( date.getTime() + GIGASECOND);
};

/*
        ROMAN NUMBERS
Write a function to convert from normal numbers to Roman Numerals.
*/

const ROMAN_NUMERALS = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I']
]
const toRoman = (number) => {
    if (number === 0) {
        return ''
    }
    let [value,roman] = ROMAN_NUMERALS.find(([value]) => value <= number);
    return roman + toRoman(number - value)
};

/*
        ISOGRAM
Determine if a word or phrase is an isogram.

An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.
*/

const isIsogram = (input) => {
    let inputReplace = input.replace(/ |-/g, "")
    return new Set(inputReplace.toLowerCase()).size === inputReplace.length
};