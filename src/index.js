import readlineSync from 'readline-sync';

const gameRules = (questions, corrects, rule) => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  let i = 0;
  for (; i < 3; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (corrects[i] === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrects[i]}'.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default gameRules;
