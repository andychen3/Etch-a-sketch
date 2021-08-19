// Select grid element div
const grid = document.querySelector('.grid');

//Creating html elements 
const blkBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const input = document.createElement('button');
const btnContainer = document.querySelector('.buttons');

//New grid size variable
let userInput;


//Default window onload hover color
window.onload = () => {
    const boxs = grid.querySelectorAll('.gridbox');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'black';
}));

}

//Create the grid squares
function createDiv(col, row) {
    for (let i = 0; i < (col*row); i++ ){
        const createBox = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        
        grid.appendChild(createBox).classList.add('gridbox');
    }
    
}

//Black color button
function blkColor () {
    const boxs = grid.querySelectorAll('.gridbox');
    blkBtn.textContent = 'Black Color';
    blkBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }));
    });
    btnContainer.appendChild(blkBtn).classList.add('btn');
}

//Rainbow color button
function rainbowColor () {
    const boxs = grid.querySelectorAll('.gridbox');
    colorBtn.textContent ='Rainbow Color';
    colorBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
        }));
    });
    btnContainer.appendChild(colorBtn).classList.add('btn');    
}

//Get input from user to change grid size
function getInput () {
    input.textContent = 'Grid Size';
    input.addEventListener('click', () => {
        userInput = parseInt(prompt('Enter Grid Size up to 64'));
        if(userInput === null || userInput < 1 || userInput > 64) {
            reset();
            createDiv(16,16);
            blkColor();
            rainbowColor();
        } else {
            reset();
            createDiv(userInput,userInput);
            console.log(userInput);
            blkColor();
            rainbowColor();
        }
    });
    btnContainer.appendChild(input).classList.add('btn'); 
    return userInput;   
}


//Clearing grid
function reset() {
    const boxs = grid.querySelectorAll('.gridbox');
    boxs.forEach(box => box.remove());
    if (userInput <= 64){
        createDiv(userInput,userInput)
        blkColor();
        rainbowColor();
    } else {
        createDiv(16,16);
        blkColor();
        rainbowColor();
    }    
}

//Creating clear button
function createReset() {
    resetBtn.textContent = 'Clear';
    btnContainer.appendChild(resetBtn).classList.add('btn');   
}

// On page load default grid size 
createDiv(16,16); 

//Load rest of buttons onto screen
getInput();
createReset();
blkColor();
rainbowColor();

//eventlistener for clear button
resetBtn.addEventListener('click', reset);

