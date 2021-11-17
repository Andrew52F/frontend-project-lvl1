import getRandomInt from '../random-num.js';

const rule = 'Find the greatest common divisor of given numbers.';
const questions = [];
const corrects = [];

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

for (let i = 0; i < 3; i += 1) {
  let bigger;
  let smaller;
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  if (number1 > number2) {
    bigger = number1;
    smaller = number2;
  } else {
    bigger = number2;
    smaller = number1;
  }
  questions.push(`${number1} ${number2}`);
  corrects.push(String(getGcd(bigger, smaller)));
}

export {
  rule,
  questions,
  corrects
};
