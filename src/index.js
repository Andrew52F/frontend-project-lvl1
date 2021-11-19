import readlineSync from 'readline-sync';

const debugMode = false;
const rounds = 3;

const gameRules = (rule, getQuestionsAndCorrects) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  for (let i = 0; i < rounds; i += 1) {
    const questionsAndCorrects = getQuestionsAndCorrects();
    console.log(`Question: ${questionsAndCorrects[0]}`);

    if (debugMode) {
      console.log(`Answer ${questionsAndCorrects[1]}, type ${typeof questionsAndCorrects[1]}`);
    }

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
