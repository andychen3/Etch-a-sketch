const grid = document.querySelector('.grid');

//creating html elements 
const blkBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const input = document.createElement('button');
const btnContainer = document.querySelector('.buttons');



//create a function to loop through the creation of divs and add it to grid

window.onload = () => {
    const boxs = grid.querySelectorAll('.gridbox');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'black';
}));

}

function createDiv(col, row) {
    for (let i = 0; i < (col*row); i++ ){
        const createBox = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;

        grid.appendChild(createBox).classList.add('gridbox');
    }
    
}


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



//going to need input from user on grid size they want

function getInput () {
    // need this associated with a button for them to enter grid size
    input.textContent = 'Grid Size';
    input.addEventListener('click', () => {
        let userInput = parseInt(prompt('Enter Grid Size up to 64'));
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

}





// add a button at top of the screen which will clear the current grid

function reset() {
    const boxs = grid.querySelectorAll('.gridbox');
    resetBtn.textContent = 'Clear';
    resetBtn.addEventListener('click', () => {
    boxs.forEach(box => box.style.backgroundColor = 'white');
    console.log('clicked');
    })
    btnContainer.appendChild(resetBtn).classList.add('btn');        

}



//On page load default grid size 

createDiv(16,16); 
getInput();
reset();
blkColor();
rainbowColor();


