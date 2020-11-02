module.exports = function check(str, bracketsConfig) {
  let stack = new Array;

  str.split('').map(el => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (el === bracketsConfig[i][0])
        stack.push(el);
      else {
        if (stack[stack.length - 1] === bracketsConfig[i][0] && el === bracketsConfig[i][1])
          stack.pop();
      }
    }
  });

  return stack.length === 0 ? true : false;
}