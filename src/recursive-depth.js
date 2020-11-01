const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {

    if (Array.isArray(array)) {

      let result = 1;
      
      for (let element of array) {

        let depth = 1;
        depth += this.calculateDepth(element);
        
        if (result < depth) {
          result = depth;
        }
      }
      return result;
    } else {
      return 0;
    }
    
  }
};