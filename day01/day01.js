var fs = require('fs');
var inputPath = 'day01/input.txt';
var fuelRequired = function (mass) {
    return Math.floor(mass / 3) - 2;
};
var fetchArray = function (path) {
    var text = fs.readFileSync(path, { encoding: "utf-8" }).split('\n');
    return text;
};
var sumFuel = function (masses) {
    return masses.map(function (mass) {
        var massInt = parseInt(mass);
        return fuelRequired(massInt);
    }).reduce(function (a, b) { return a + b; });
};
var run = function () {
    var arr = fetchArray(inputPath);
    var res = sumFuel(arr);
    console.log(res);
    return res;
};
run();
module.exports = {
    fuelRequired: fuelRequired
};
