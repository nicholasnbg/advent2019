const fs = require('fs');
const inputPath = 'day01/input.txt';

const fuelRequired = (mass: number): number => {
  return Math.floor(mass / 3) - 2  
};

const fetchArray = (path: string): Array<string> => {
  var text = fs.readFileSync(path, {encoding: "utf-8"}).split('\n')
  return text
};

const sumFuel = (masses: Array<string>): number => 
  masses.map(mass => {
    const massInt = parseInt(mass) 
    return fuelRequired(massInt)
  }).reduce((a, b) => a + b);


const run = (): number => {
  const arr = fetchArray(inputPath);
  const res =  sumFuel(arr)
  console.log(res)
  return res
};

run()

module.exports = {
  fuelRequired
};

