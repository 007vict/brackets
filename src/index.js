let bracketClosed = {};

module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false

  let stack = [];

  createDict(bracketsConfig)

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current in bracketClosed && bracketClosed[current] !== current) {
      if (bracketClosed[current] !== stack[stack.length - 1]) {
        stack.push(current);
      } else if (bracketClosed[current] === stack[stack.length - 1]) {
        stack.pop();
      }
    } else if (bracketClosed[current] === current && stack.includes(current)) {
      if (current === stack[stack.length - 1]) {
        stack.pop();
      }
    } else {
      stack.push(current)
    }
  }
  return stack.length === 0;

  function createDict(dict) {
    for (let i = 0; i < dict.length; i++) {
      curr1 = dict[i][0];
      curr2 = dict[i][1];
      bracketClosed[curr2] = curr1;
    }
  }
};


