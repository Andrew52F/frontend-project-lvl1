import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameRules = (rule, getQuestionsAndCorrects) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [qestion, correct] = getQuestionsAndCorrects();
    console.log(`Question: ${qestion}`);

    const answer = readlineSync.question('Your answer: ');

    if (correct !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameRules;
