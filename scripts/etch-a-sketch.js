const button = document.querySelector('.button-set-size');
const gridContainer = document.querySelector('.grid-container');
let gridSize = 0;

//function: generate grid
function generateSquareGrid() {
    const squaresPerSide = prompt('Choose a grid size: ');
    gridSize = squaresPerSide;
    const totalSquares = squaresPerSide**2;
    wipeContent();
    const gridWidth = getGridWidth();
    const squareSideSize = getSquareSideSize(gridWidth, squaresPerSide);
    populateGrid(totalSquares, squareSideSize);
}

button.addEventListener('click', generateSquareGrid);

function wipeContent() {
    gridContainer.innerHTML = '';
}

function getGridWidth() {
    return gridContainer.offsetWidth - 1;
}

function getSquareSideSize(gridWidth, squaresPerSide) {
    return gridWidth / squaresPerSide;
}

function createSquare(squareSideSize) {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');
    setSquareDimensions(squareElement, squareSideSize);
    return squareElement;
}

function populateGrid(totalSquares, squareSideSize) {
    for (let i = 0; i < totalSquares; i++) {
        gridContainer.appendChild(createSquare(squareSideSize));
    }
}

function resizeGridSquares(squareSideSize) {
    const squares = document.querySelectorAll('.square');
    let count = 0;
    squares.forEach(element => {
        setSquareDimensions(element, squareSideSize);
    })
}

function setSquareDimensions(element, squareSideSize) {
    element.style.width = `${squareSideSize}px`;
    element.style.height = `${squareSideSize}px`;    
}

window.addEventListener('resize', () => {
    const gridWidth = getGridWidth();
    const squareSideSize = getSquareSideSize(gridWidth, gridSize);
    resizeGridSquares(squareSideSize);
})


//DO: generate grid
//function: wipe existing container content, if any
//function: determine container width - returns width
//function: determine square size - returns number representing size of side
//function: create individual square
//function: populate grid with squares


//DO: resize grid squares
//function: set square size
//essentially resizing just means getting new container width, determine square size, then for each existing square, change dimensions


//add event listener to trigger grid resize upon window resize