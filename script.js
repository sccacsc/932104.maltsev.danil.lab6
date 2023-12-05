const leftLayoutBtn = document.querySelector('.layouts-navItem.left');
const rightLayoutBtn = document.querySelector('.layouts-navItem.right');
const bothLayoutBtn = document.querySelector('.layouts-navItem.both');

const leftColumn = document.querySelector('.layouts-templateItem:nth-child(1)');
const rightColumn = document.querySelector('.layouts-templateItem:nth-child(2)');

leftLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(leftColumn, rightColumn);
});

rightLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(rightColumn, leftColumn);
});

bothLayoutBtn.addEventListener('click', () => {
    rightColumn.style.flexBasis = '50%';
    rightColumn.querySelector('img').style.width = '100%';
    rightColumn.querySelector('img').style.display = 'block';
    leftColumn.style.flexBasis = '50%';
    leftColumn.querySelector('img').style.display = 'block';
    leftColumn.querySelector('img').style.width = '100%';
});

const createAsymmetricColumns = (wideColumnEl, narrowColumnEl) => {
    wideColumnEl.style.flexBasis = '95%';
    wideColumnEl.querySelector('img').style.width = '75%';
    wideColumnEl.querySelector('img').style.display = 'block';
    narrowColumnEl.style.flexBasis = '5%';
    narrowColumnEl.querySelector('img').style.display = 'none';
};
