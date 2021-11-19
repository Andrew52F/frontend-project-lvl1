import getRandomInt from '../random-num.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const getQuestionsAndCorrects = () => {
  const number = getRandomInt(100);
  const question = number;
  const correct = isEven(number);
  return [question, correct];
};
export { rule, getQuestionsAndCorrects };
