import getRandomInt from '../random-num.js';
import gameRules from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (firstItem, differentiator, progressionLength) => {
  const progression = [firstItem];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstItem + differentiator * i);
  }
  return progression;
};

const getQuestionsAndCorrects = () => {
  const progressionLength = getRandomInt(5, 10);
  const firstItem = getRandomInt(0, 100);
  const differentiator = getRandomInt(1, 5);
  const progression = getProgression(firstItem, differentiator, progressionLength);
  const missingItemID = getRandomInt(0, progressionLength - 1);
  const correct = String(progression[missingItemID]);
  progression[missingItemID] = '..';
  const question = progression.join(' ');
  return [question, correct];
};

const progressionStart = () => {
  gameRules(rule, getQuestionsAndCorrects);
};

export default progressionStart;
