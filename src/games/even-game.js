import getRandomInt from '../random-num.js';
import gameRules from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndCorrects = () => {
  const number = getRandomInt(1, 100);
  const question = number;
  const correct = (isEven(number)) ? 'yes' : 'no';
  return [question, correct];
};

const evenStart = () => {
  gameRules(rule, getQuestionsAndCorrects);
};

export default evenStart;
