const {fuelRequired} = require("./day01")

test('fuelRequired should', () => {
    expect(fuelRequired(12)).toBe(2);
    expect(fuelRequired(14)).toBe(2);
    expect(fuelRequired(1969)).toBe(654);
    expect(fuelRequired(100756)).toBe(33583);
});