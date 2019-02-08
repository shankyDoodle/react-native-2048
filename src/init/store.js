import _ from 'lodash';
import Matrix from 'matrix-js';

const initValue = [2, 4];

const MaxRows = 4;

const MaxColumns = 4;

const blankMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];


let matrix = [];
let score = 0;

export const fillCell = (matrix) => {
  let isSet = false;
  do {
    let cell = {
      v: initValue[_.random(0, 1, false)],
      x: _.random(0, 3),
      y: _.random(0, 3)
    };
    if (matrix[cell.x][cell.y] === 0) {
      matrix[cell.x][cell.y] = cell.v;
      isSet = true;
    }
  } while (!isSet);

  return matrix;
};

export const initMatrix = () => {
  matrix = _.cloneDeep(blankMatrix);

  fillCell(matrix);
  fillCell(matrix);

  return matrix;
};

export const getScore = () => {
  return score;
};

export const getMatrix = () => {
  return matrix;
};


export const isOver = (matrix) => {
  return _.flatten(matrix).every(x => x === 0);
};

export const toLeft = (matrix, score = 0, needTrans = false) => {
  const copy = _.cloneDeep(matrix);
  matrix.forEach(
    (line, k) => {
      let i = 0;
      line = line.filter(x => x !== 0);
      while (i < line.length) {
        if (line[i] === line[i + 1]) {
          let newValue = line[i] + line[i + 1];
          line[i] = newValue;
          line.splice(i + 1, 1);
          score += newValue;
        }
        i++;
      }

      while (line.length < MaxColumns) {
        line = line.push(0);
      }

      matrix[k] = line;
    }
  );
  let newMatrix = _.cloneDeep(matrix);
  if (!_.isEqual(matrix, copy)) {
    fillCell(newMatrix);
  }

  if (needTrans) {
    newMatrix = Matrix(newMatrix).trans();
  }

  return {matrix: newMatrix, score: score, isOver: isOver(newMatrix)};
};

export const toRight = (matrix, score = 0, needTrans = false) => {
  const copy = _.cloneDeep(matrix);
  matrix.forEach((line, k) => {
      line = line.filter(x => x !== 0);
      let i = line.length - 1;
      while (i > 0) {
        if (line[i] === line[i - 1]) {
          let newValue = line[i] + line[i - 1];
          line[i] = newValue;
          line.splice(i - 1, 1);
          score += newValue;
        }

        i--;
      }

      while (line.length < MaxColumns) {
        line.unshift(0);
      }

      matrix[k] = line;
    }
  );
  let newMatrix = _.cloneDeep(matrix);
  if (!_.isEqual(matrix, copy)) {
    fillCell(newMatrix);
  }

  if (needTrans) {
    newMatrix = Matrix(newMatrix).trans();
  }

  return {matrix: newMatrix, score: score, isOver: isOver(newMatrix)};
};

export const toUp = (matrix, score) => toLeft(Matrix(matrix).trans(), score, true);

export const toDown = (matrix, score) => toRight(Matrix(matrix).trans(), score, true);

export const doSwipe = (sDirection) => {
  let oData = {};
  switch (sDirection) {
    case "up":
      oData = toUp(matrix, score);
      break;

    case "down":
      oData = toDown(matrix, score);
      break;

    case "left":
      oData = toLeft(matrix, score);
      break;

    case "right":
      oData = toRight(matrix, score);
      break;
  }
  matrix = oData.matrix;
  score = oData.score;
  return oData;
};