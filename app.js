const grid = document.querySelector('.grid');

//creating html elements 
const blkBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const btnContainer = document.querySelector('.buttons');

const input = document.createElement('input-value');

//create a function to loop through the creation of divs and add it to grid

function createDiv(col, row) {
    for (let i = 0; i < (col*row); i++ ){
        const createBox = document.createElement('div');
        // want to take the col and row and output out the size
        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        createBox.classList.add('gridbox');

        grid.appendChild(createBox);
    }
    
}

//On page load default grid size 


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



}



// add a button at top of the screen which will clear the current grid

function reset() {
    const boxs = grid.querySelectorAll('.gridbox');
    resetBtn.textContent = 'Clear Me';
    resetBtn.addEventListener('click', () => {
    boxs.forEach(box => box.remove()); 
    })
   
    btnContainer.appendChild(resetBtn).classList.add('.btn');        
    
   

}







//and send user a popup asking for numbers of squares per side for new grid
//once entered grid should be generated in same total space as before
// set the limit for user input to max 100. Larger # of squares could casue 
//crashing

createDiv(16,16); 
blkColor();
rainbowColor();
reset();
