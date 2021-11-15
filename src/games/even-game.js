import getRandomInt from '../random-num.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = [];
const corrects = [];
for (let i = 0; i < 3; i += 1) {
  const number = getRandomInt(100);
  questions.push(number);
  corrects.push((number % 2 === 0) ? 'yes' : 'no');
}
export {
  rule, questions, corrects
};
