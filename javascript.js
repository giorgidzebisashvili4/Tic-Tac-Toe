const boardDisplay = document.querySelector('.container')


for(let i=0 ; i<9; i++){
let grid = document.createElement('div')
grid.classList= `grid-${i}`
grid.id = `${i}`
boardDisplay.appendChild(grid)
}

let allGrid = document.querySelectorAll('.container>div')




function createUser () {
    let arr = []
        
          
    const marcko = (x) => arr[x]= ("o");
    const marckx = (x) => arr[x]= ("x");
  
    

    return { arr, marcko,marckx};
  }
  
  const board = createUser();


  allGrid.forEach((div)=>{
    div.addEventListener('click',(e)=>{
        e.target.style.background = "red"
        board.arr[div.id] = "x"
        console.log(board.arr)
    })
})


//   if(board.arr[0][0]===board.arr[0][1] &  board.arr[0][1]===board.arr[0][2] & board.arr[0][2] === "o"){
//     console.log(`game over player{} win`)
//     }else{console.log("help")}

console.log(board.arr)