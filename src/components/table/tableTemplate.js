const CODES = {
  A: 65,
  Z: 90
};

const createCell = () => {
  return `<div class="cell" contenteditable></div>`;
};

const createCol = (col) => {
  return `
    <div class="column">
        ${col}
    </div>
    `;
};

const createRow = (content, index = '') => {
  return `
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">
            ${content}
        </div>
    </div>
    `;
};

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};
export const createTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount).fill('')
      .map(toChar)
      .map(createCol).join('');

  rows.push(createRow(cols));
  const cells = new Array(colsCount).fill('')
      .map(createCell).join('');
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1));
  }
  return rows.join('');
};
