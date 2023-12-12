const boardDisplay = document.querySelector('.container')

// create DOM grid 3x3
for(let i=0 ; i<9; i++){
let grid = document.createElement('div')
grid.classList= `grid-${i}`
grid.id = `${i}`
boardDisplay.appendChild(grid)
}

let allGrid = document.querySelectorAll('.container>div')


function createUser () {
    let arr = []

    let testScore = function(){
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
            console.log(`winner is ${winner}`)
            stopGame()
        }else if(movesMade === 9){
            console.log('it is tie')
            stopGame()
        }
    }          
function stopGame(){ 
   
}

    return { arr, testScore};
  }
  let movesMade = 0  
  let winner = ""

  const board = createUser();
  

  allGrid.forEach((div)=>{
    div.addEventListener('click',(e)=>{
        if(e.target.style.background === ""){
        if(movesMade % 2 == 0){
        e.target.style.background = "red"
        board.arr[div.id] = "x"
        console.log(board.arr)
        movesMade+=1
        winner = "red"
        }
        else{
            e.target.style.background = "blue"
            board.arr[div.id] = "o"
            console.log(board.arr)
            movesMade+=1
            winner = "blue"
        }}
        board.testScore()
    })
})


console.log(board.arr)