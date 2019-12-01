const fs = require('fs');
const inputPath = 'day01/input.txt';

//Convert list of module masses String -> Number
const fetchArray = (path: string): string[] => {
  var text = fs.readFileSync(path, {encoding: "utf-8"}).split('\n')
  return text
};

// Fuel required for mass
const fuelRequired = (mass: number): number => Math.floor(mass / 3) - 2;  


// Recursive method to calculate fuel for fuel for fuel etc....
const allFuel = (mass: number): number => {
  const fr = fuelRequired(mass)
  return fr > 0 ? fr + allFuel(fr) : 0
}

// Sum fuel (basically just reduce)
const sumFuel = (fuelArr: number[]) => fuelArr.reduce((a, b) => a + b);    

// Map module masses to fuel required
const mapFuel = (masses: string[]): number[] => {
  return masses.map(mass => {
    const massInt = parseInt(mass) 
    return allFuel(massInt)
  })
}

const run = (): number => {
  const arr = fetchArray(inputPath);
  const res = sumFuel(mapFuel(arr))
  console.log(res)
  return res
};

run()

module.exports = {
  fuelRequired
};

