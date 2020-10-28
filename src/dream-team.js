const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  
  if (arr === []) {
    return null;
  }

  if (!Array.isArray(arr)) {
    return false;
  }

  let newArr = arr.map(function (str) {
    if (typeof str === 'string') {
      return str.match(/[^\s]/)[0].toUpperCase();
    }
  })

  function isString(something) {
    return typeof (something) === 'string';
  }

  let sorted = newArr.filter(isString).slice().sort().join('');

  return sorted;
};
