const CODES = {
  A: 65,
  Z: 90
};

const createCell = (_, col) => {
  return (`
    <div 
      class="cell" 
      contenteditable
      data-col="${col}"
    >
    </div>
    ` );
};

const createCol = (col, index) => {
  return `
    <div 
      class="column" 
      data-col="${index}"
      data-type="resizable"
      >
        ${col}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `;
};

const createRow = (content, index = '') => {
  const resize = index ? (
    `<div class="row-resize" data-resize="row"></div>`
  ) : '';

  return `
    <div class="row" data-type="resizable">
        <div class="row-info">
          ${index}
          ${resize}
        </div>
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
