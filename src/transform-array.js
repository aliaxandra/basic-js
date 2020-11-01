const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  if (arr.length === 0) {
    return [];
  }

  let newArr = [];

  for (i = 0; i < arr.length; i++) {

    switch (arr[i]) {

      case '--discard-next':
        i++;
        continue;

      case '--discard-prev':
        if (result.length !== 0 && arr[i - 2] !== '--discard-next') {
          newArr.pop();
        }
        continue;

      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        continue;

      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1])
        }
        continue;

      default:
        newArr.push(arr[i]);

    }

  }

  return newArr;

};
