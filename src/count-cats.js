const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let results = arr.filter(item => item === '^^').length;
  return results;
};
