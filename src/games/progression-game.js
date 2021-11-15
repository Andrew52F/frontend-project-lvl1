import getRandomInt from '../random-num.js';

const rule = 'What number is missing in the progression?';
const questions = [];
const corrects = [];
for (let i = 0; i < 3; i += 1) {
  const row = [];
  const rowLength = 5 + getRandomInt(5);
  const differentiator = 1 + getRandomInt(4);

  for (let j = 0; j < rowLength; j += 1) {
    if (row.length === 0) {
      row.push(getRandomInt(100));
    } else {
      row.push(row[j - 1] + differentiator);
    }
  }

  const missingItemID = getRandomInt(rowLength);
  corrects.push(String(row[missingItemID]));
  row[missingItemID] = '..';
  let rowString = '';
  for (let j = 0; j < rowLength; j += 1) {
    rowString = rowString + row[j] + ' ';
  }
  questions.push(rowString);
}

export {
  rule, questions, corrects
};
