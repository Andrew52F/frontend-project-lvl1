import getRandomInt from '../random-num.js';
import gameRules from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let mark = true;
  for (let j = 2; j <= Math.sqrt(number); j += 1) {
    if (number % j === 0) {
      mark = false;
    }
  }
  return (mark) ? 'yes' : 'no';
};

const getQuestionsAndCorrects = () => {
  const number = getRandomInt(1, 100);
  const correct = isPrime(number);
  return [number, correct];
};

const primeStart = () => {
  gameRules(rule, getQuestionsAndCorrects);
};

export default primeStart;
