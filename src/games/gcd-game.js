import getRandomInt from '../random-num.js';
import gameRules from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (!number2) {
    return Math.abs(number1);
  }
  return getGcd(number2, number1 % number2);
};

const getQuestionsAndCorrects = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  const question = `${number1} ${number2}`;
  const correct = String(getGcd(number1, number2));

  return [question, correct];
};

const gcdStart = () => {
  gameRules(rule, getQuestionsAndCorrects);
};

export default gcdStart;
