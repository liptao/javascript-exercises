const ftoc = function(fTemp) {
  // [°C] = ([°F] − 32) × 5⁄9
  return Math.round((fTemp - 32) * 5/9 * 10) / 10
};

const ctof = function(cTemp) {
  // [°F] = [°C] × 9⁄5 + 32
  return Math.round((cTemp * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
