import _ from 'lodash';
import Matrix from 'matrix-js';
import {fromJS, is} from 'immutable';


const initValue = [2, 4];

const MaxRows = 4;

const MaxColumns = 4;

const blankMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];


let workingMatrix = [];

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
  workingMatrix = [];
  workingMatrix = _.cloneDeep(blankMatrix);

  fillCell(workingMatrix);
  fillCell(workingMatrix);

  return workingMatrix;
};

export const isOver = (matrix) => {
  return fromJS(matrix).every(x => x === 0);
};

export const toLeft = (matrix, score = 0, needTrans = false) => {
  const copy = matrix;
  matrix.forEach(
    (line, k) => {
      let i = 0;
      line = line.filter(x => x !== 0);
      while (i < line.size) {
        if (line.get(i) === line.get(i + 1)) {
          let newValue = line.get(i) + line.get(i + 1);
          line = line.set(i, newValue);
          line = line.remove(i + 1);
          score += newValue;
        }
        i++;
      }

      while (line.size < MaxColumns) {
        line = line.push(0);
      }

      matrix = matrix.set(k, line);
    }
  );
  let newMatrix = matrix.toJS();
  if (!is(matrix, copy)) {
    fillCell(newMatrix);
  }

  if (needTrans) {
    newMatrix = Matrix(newMatrix).trans();
  }

  return {matrix: fromJS(newMatrix), score: score, isOver: isOver(newMatrix)};
};

export const toRight = (matrix, score = 0, needTrans = false) => {
  const copy = matrix;
  matrix.forEach(
    (line, k) => {
      line = line.filter(x => x !== 0);
      let i = line.size - 1;
      while (i > 0) {
        if (line.get(i) === line.get(i - 1)) {
          let newValue = line.get(i) + line.get(i - 1);
          line = line.set(i, newValue);
          line = line.remove(i - 1);
          score += newValue;
        }

        i--;
      }

      while (line.size < MaxColumns) {
        line = line.insert(0, 0);
      }

      matrix = matrix.set(k, line);
    }
  );
  let newMatrix = matrix.toJS();
  if (!is(matrix, copy)) {
    fillCell(newMatrix);
  }

  if (needTrans) {
    newMatrix = Matrix(newMatrix).trans();
  }

  return {matrix: fromJS(newMatrix), score: score, isOver: isOver(newMatrix)};
};

export const toUp = (matrix, score) => toLeft(fromJS(Matrix(matrix.toJS()).trans()), score, true);

export const toDown = (matrix, score) => toRight(fromJS(Matrix(matrix.toJS()).trans()), score, true);
