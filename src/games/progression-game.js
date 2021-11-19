import getRandomInt from '../random-num.js';

const rule = 'What number is missing in the progression?';

const getRow = (rowLength, differentiator) => {
  const row = [];
  for (let j = 0; j < rowLength; j += 1) {
    if (row.length === 0) {
      row.push(getRandomInt(100));
    } else {
      row.push(row[j - 1] + differentiator);
    }
  }
  return row;
};

const getQuestionStringRow = (row, missingItemID) => {
  const placeHolder = '..';
  let rowString = '';
  for (let i = 0; i < row.length; i += 1) {
    if (missingItemID === i) {
      rowString = `${rowString + placeHolder} `;
    } else {
      rowString = `${rowString + row[i]} `;
    }
  }
  return rowString;
};

const getQuestionsAndCorrects = () => {
  const rowLength = 5 + getRandomInt(5);
  const differentiator = 1 + getRandomInt(4);
  const missingItemID = getRandomInt(rowLength);

  const row = getRow(rowLength, differentiator);

  const correct = String(row[missingItemID]);
  const question = getQuestionStringRow(row, missingItemID);
  return [question, correct];
};

export { rule, getQuestionsAndCorrects };
