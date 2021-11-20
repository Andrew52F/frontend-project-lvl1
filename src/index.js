import readlineSync from 'readline-sync';
import greetings from './cli.js';

const roundsCount = 3;

const gameRules = (rule, getQuestionsAndCorrects) => {
  const name = greetings();

  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const questionsAndCorrects = getQuestionsAndCorrects();
    console.log(`Question: ${questionsAndCorrects[0]}`);

    const answer = readlineSync.question('Your answer: ');

    if (questionsAndCorrects[1] !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndCorrects[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameRules;
