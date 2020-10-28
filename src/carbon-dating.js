const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  
  if (typeof sample !== 'string' || +sample >= 15 || +sample <= 0) {
    return false;
  }

  if (/^\d+$/.test(sample) === false) {
    return false;
  }
  
  let decay = 0.693 / HALF_LIFE_PERIOD;

  result = Math.log(MODERN_ACTIVITY / +sample) / decay;
};
