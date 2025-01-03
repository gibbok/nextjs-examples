// All the code in this module is
// enclosed in closure
(function (exports) {
  let count = 0;

  // Helper function
  function toLC(str) {
    return str.trim().toLowerCase();
  }

  // Function to be exposed
  function getFrequency(str) {
    str = toLC(str);
    var freq = [];
    for (var i = 0; i < 26; i++) {
      freq.push(0);
    }

    for (var i = 0; i < str.length; i++) {
      freq[str.charCodeAt(i) - 97]++;
    }
    return freq;
  }

  function increase() {
    count++;
    return count;
  }

  // Export the function to exports
  // In node.js this will be exports
  // the module.exports
  // In browser this will be function in
  // the global object sharedModule
  exports.getFrequency = getFrequency;
  exports.increase = increase;
})(typeof exports === "undefined" ? (this["sharedModule"] = {}) : exports);
