const ftoc = function (f) {
  return Math.round((((f - 32) * 5 / 9) + Number.EPSILON) * 10) / 10;
};

const ctof = function (c) {
  return Math.round(((c * 9 / 5 + 32) + Number.EPSILON) * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
