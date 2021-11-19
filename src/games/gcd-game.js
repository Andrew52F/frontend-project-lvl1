import getRandomInt from '../random-num.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let result = '';
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  result = t.toString();
  return result;
};

const getQuestionsAndCorrects = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const bigger = (number1 > number2) ? number1 : number2;
  const smaller = (number1 > number2) ? number2 : number1;

  const question = `${number1} ${number2}`;
  const correct = String(getGcd(bigger, smaller));

  return [question, correct];
};

export { rule, getQuestionsAndCorrects };
