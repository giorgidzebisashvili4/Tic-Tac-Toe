
const boardDisplay = document.querySelector('.container')

// create DOM grid 3x3
for(let i=0 ; i<9; i++){
let grid = document.createElement('div')
grid.classList= `grid-${i}`
grid.id = `${i}`
boardDisplay.appendChild(grid)
}

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
            stopGame()
        }else if(movesAndWinner.movesMade === 9){
            console.log('it is tie')
            stopGame()
        }
    }      
    
    
function stopGame(){ 
   
}

    return { arr, testScore};
  }


let movesAndWinner = {
    movesMade : 0,
    winner : ""
}  
//   let movesMade = 0  
//   let winner = ""

  const board = createUser();
  

  allGrid.forEach((div)=>{
    div.addEventListener('click',(e)=>{
        // click if it was not clicked
        if(e.target.style.background === ""){
            // order first is x and second o ...
        if(movesAndWinner.movesMade % 2 == 0){
            // when clicked make background color red
        e.target.style.background = "red"
        board.arr[div.id] = "x"
        console.log(board.arr)

        movesAndWinner.movesMade+=1
        //who has last move it wins (if it is not tie)
        movesAndWinner.winner = "red"
        }
        else{
            e.target.style.background = "blue"
            board.arr[div.id] = "o"
            console.log(board.arr)
            
            movesAndWinner.movesMade+=1
            
            movesAndWinner.winner = "blue"
        }}
        board.testScore()
    })
})


console.log(board.arr)