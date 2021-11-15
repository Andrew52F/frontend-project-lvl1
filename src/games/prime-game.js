import getRandomInt from './../../random-num.js';
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = [];
const corrects = [];
for (let i = 0; i < 3; i += 1) {
  const number = getRandomInt(100);
  questions.push(number);
  let mark = true;

  for (let j = 2; j <= Math.sqrt(number); j += 1) {
    if (number % j === 0) {
      mark = false;
    }
  }
  corrects.push((mark) ? 'yes' : 'no');
}
export {
  rule, questions, corrects
};
