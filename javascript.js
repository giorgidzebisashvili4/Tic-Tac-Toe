// const arr = [
// [,,],
// [,,],
// [,,]
// ]



// if((arr[0][0]===arr[0][1] &  arr[0][1]===arr[0][2])||
// ...){
    //stop game we have winner
    // arr[0][0](x or o) is winner
// }

function createUser () {
    let arr = [
        [,,],
        [,,],
        [,,]
        ]
        
          
    const marck1x1 = () => arr[0][0]= ("o");
    const marck1x2 = () => arr[0][1]= ("o");
    const marck1x3 = () => arr[0][2]= ("o");
    const marck2x1 = () => arr[1][0]= ("o");
    const marck2x2 = () => arr[1][1]= ("o");
    const marck2x3 = () => arr[1][2]= ("o");
    const marck3x1 = () => arr[2][0]= ("o");
    const marck3x2 = () => arr[2][1]= ("o");
    const marck3x3 = () => arr[2][2]= ("o");

    const marck1x1x = () => arr[0][0]= ("x");
    const marck1x2x = () => arr[0][1]= ("x");
    const marck1x3x = () => arr[0][2]= ("x");
    const marck2x1x = () => arr[1][0]= ("x");
    const marck2x2x = () => arr[1][1]= ("x");
    const marck2x3x = () => arr[1][2]= ("x");
    const marck3x1x = () => arr[2][0]= ("x");
    const marck3x2x = () => arr[2][1]= ("x");
    const marck3x3x = () => arr[2][2]= ("x");
  
    

    return { arr, marck1x1 , marck1x2,marck1x3,marck2x1,marck2x2,marck2x3,marck3x1,marck3x2,marck3x3,
        marck1x1x,marck1x2x,marck1x3x,marck2x1x,marck2x2x,marck2x3x,marck3x1x,marck3x2x,marck3x3x};
  }
  
  const board = createUser();
  board.marck1x1()
  board.marck1x2()
  board.marck2x3()


  if(board.arr[0][0]===board.arr[0][1] &  board.arr[0][1]===board.arr[0][2] & board.arr[0][2] === "o"){
    console.log(`game over player{} win`)
    }else{console.log("help")}

console.log(board.arr)