var fs = require('fs');
var inputPath = 'day01/input.txt';
//Convert list of module masses String -> Number
var fetchArray = function (path) {
    var text = fs.readFileSync(path, { encoding: "utf-8" }).split('\n');
    return text;
};
// Fuel required for mass
var fuelRequired = function (mass) { return Math.floor(mass / 3) - 2; };
// Recursive method to calculate fuel for fuel for fuel etc....
var allFuel = function (mass) {
    var fr = fuelRequired(mass);
    return fr > 0 ? fr + allFuel(fr) : 0;
};
// Sum fuel (basically just reduce)
var sumFuel = function (fuelArr) { return fuelArr.reduce(function (a, b) { return a + b; }); };
// Map module masses to fuel required
var mapFuel = function (masses) {
    return masses.map(function (mass) {
        var massInt = parseInt(mass);
        return allFuel(massInt);
    });
};
var run = function () {
    var arr = fetchArray(inputPath);
    var res = sumFuel(mapFuel(arr));
    console.log(res);
    return res;
};
run();
module.exports = {
    fuelRequired: fuelRequired
};
