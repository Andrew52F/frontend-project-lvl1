import getRandomInt from './../../random-num.js';
import readlineSync from 'readline-sync';
const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  for (; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log(`Question: ${number}`);
    const correct = (number % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (correct === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default evenGame;
