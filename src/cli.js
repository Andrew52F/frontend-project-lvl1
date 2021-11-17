import readlineSync from 'readline-sync';

let nameTemp = '';
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  nameTemp = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameTemp}!`);
  return nameTemp;
};
const name = nameTemp;

export { name, greetings };
