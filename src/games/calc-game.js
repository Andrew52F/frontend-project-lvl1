import getRandomInt from '../random-num.js';

const rule = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const calculator = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getQuestionsAndCorrects = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const sign = signs[getRandomInt(2)];
  const question = `${num1} ${sign} ${num2}`;
  const correct = String(calculator(num1, num2, sign));

  return [question, correct];
};

export { rule, getQuestionsAndCorrects };
