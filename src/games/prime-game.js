import getRandomInt from '../random-num.js';

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
  const number = getRandomInt(100);
  const correct = isPrime(number);
  return [number, correct];
};
export { rule, getQuestionsAndCorrects };
