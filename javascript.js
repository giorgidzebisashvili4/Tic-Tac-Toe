
const container = document.querySelector('body')
// const boardDisplay = document.querySelector('.container')
const display = document.querySelector(".winner")
const startBtn = document.querySelector(".startGame")
const restartBtn = document.querySelector(".reStartGame")

startBtn.addEventListener('click',()=>{
let boardDisplay = document.createElement('div')
boardDisplay.classList.add('container')
container.appendChild(boardDisplay)

    for(let i=0 ; i<9; i++){
        let grid = document.createElement('div')
        grid.classList= `grid-${i}`
        grid.id = `${i}`
        boardDisplay.appendChild(grid)
        }
})
// create DOM grid 3x3


// select grid sections for event listener
let allGrid = document.querySelectorAll('.container>div')


function createUser () {
      
    // save all moves 1x1 => [0]  1x2 => arr[3] ...
    let arr = []

    //track winner 
    let testScore = function(){
        // all winner moves 
        if(
            (arr[0] === arr[1] & arr[1] === arr[2]) && arr[0]   ||
            (arr[3] === arr[4] & arr[4] === arr[5]) && arr[3]   ||
            (arr[6] === arr[7] & arr[7] === arr[8]) && arr[6]   ||
            (arr[0] === arr[3] & arr[3] === arr[6]) && arr[0]   ||
            (arr[1] === arr[4] & arr[4] === arr[7]) && arr[1]   ||
            (arr[2] === arr[5] & arr[5] === arr[8]) && arr[2]   ||
            (arr[0] === arr[4] & arr[4] === arr[8]) && arr[0]   ||
            (arr[2] === arr[4] & arr[4] === arr[6]) && arr[2]  

        ){
            console.log(`winner is ${movesAndWinner.winner}`)

             // winner dom
            let winDisplay = document.createElement('h2')
            winDisplay.textContent = `winner is ${movesAndWinner.winner}`
            display.appendChild(winDisplay)

            stopGame()
        }else if(movesAndWinner.movesMade === 9){
            console.log('it is tie')

             // winner dom
            let tieDisplay = document.createElement('h2')
            tieDisplay.textContent = 'it is tie'
            display.appendChild(tieDisplay)

            stopGame()
        }
    }      
    
    
function stopGame(){ 
movesAndWinner.gameEnded = true
}

    return { arr, testScore};
  }

// no using global variables
let movesAndWinner = {
    movesMade : 0,
    winner : ""
}  ;


  const board = createUser();
  
  // Helper function to create SVG element from file
function createSVGFromFile(iconFileName) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");

    // Create an <image> element and set its href attribute to the SVG file
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("href", `./icons/${iconFileName}`);
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");

    svg.appendChild(image);
    return svg;
}

// Select the body element
const body = document.querySelector('body');

// Attach the click event to the body and delegate it to the grid elements
body.addEventListener('click', (e) => {
    const clickedDiv = e.target.closest('.container>div');

    if (clickedDiv) {
        // Check if the game has ended
        if (movesAndWinner.gameEnded) {
            return;  // If the game has ended, do nothing
        }

        // Check if the clicked div already contains an SVG element
        const existingSVG = clickedDiv.querySelector('svg');

        // Click if it was not clicked and there is no existing SVG
        if (!existingSVG) {
            // order first is x and second o ...
            if (movesAndWinner.movesMade % 2 === 0) {
                // when clicked make background color red
                clickedDiv.appendChild(createSVGFromFile("x.svg"));
                board.arr[clickedDiv.id] = "x";
                movesAndWinner.winner = "x";
            } else {
                clickedDiv.appendChild(createSVGFromFile("o.svg"));
                board.arr[clickedDiv.id] = "o";
                movesAndWinner.winner = "o";
            }

            movesAndWinner.movesMade += 1;
            board.testScore();
        }
    }
});



console.log(board.arr)