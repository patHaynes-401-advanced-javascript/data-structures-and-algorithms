const { Stack } = require('../stackAndQueue/stack-and-queue');

const balanceTheBrackets = stack => ({
  '{': () => stack.push('}'),
  '[': () => stack.push(']'),
  '(': () => stack.push(')'),
  '}': () => stack.pop() === '}',
  ']': () => stack.pop() === ']',
  ')': () => stack.pop() === ')',
});
const isTrue = () => true;

module.exports = function multiBracketValidation(input) {
  const closureStack = new Stack();
  const matchingBrackets = balanceTheBrackets(closureStack);
  const checkForMatchingBrackets = char => matchingBrackets[char] || isTrue;

  const isBalanced = input.split('').every(char => checkForMatchingBrackets(char)());
  return isBalanced && closureStack.top === null;
};