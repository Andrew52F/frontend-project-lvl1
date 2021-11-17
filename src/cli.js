import readlineSync from 'readline-sync';

const name = '';
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { name, greetings };
