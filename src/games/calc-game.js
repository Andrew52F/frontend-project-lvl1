import getRandomInt from './../../random-num.js';
const rule = 'What is the result of the expression?';
const questions = [];
const corrects = [];
const signs = ['+', '-', '*'];
for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const sign = signs[getRandomInt(2)];
  questions.push(`${num1} ${sign} ${num2}`);
  switch (sign) {
    case '+':
      corrects.push(String(num1 + num2));
      break;
    case '-':
      corrects.push(String(num1 - num2));
      break;
    default:
      corrects.push(String(num1 * num2));
      break;
  }
}
export {
  rule, questions, corrects
};
