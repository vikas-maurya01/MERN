const boxes=document.querySelectorAll(".box");
const gameInfo= document.querySelector(".game-info");
const newGameBtn= document.querySelector(".btn");

let gameGrid;
let currentPlayer;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function gameInit(){
    currentPlayer= "X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box , index)=>{
        box.textContent="";
        boxes[index].style.pointerEvents="all"
    })
    newGameBtn.classList.remove("active");
    gameInfo.textContent=`Current Player - ${currentPlayer}`
}

gameInit()

function cheakWinner(){
    let answer="";
    winningPosition.forEach((position)=>{
        if((gameGrid(position[0])!=="" || gameGrid(position[1])!=="" || gameGrid(position[2])!=="")&& gameGrid(position))
    })

}

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";

    }
    else{
        currentPlayer="X";
    }

    gameInfo.innerText=`Current Player - ${currentPlayer}`
}

function handelClick(index){
    if(gameGrid[index]===""){
        boxes[index].textContent=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none"
        swapTurn();
        cheakWinner();

    }
}

boxes.forEach((box, index) =>{
    box.addEventListener("click",()=>{
        handelClick(index);
    })
} )

newGameBtn.addEventListener("click", gameInit)