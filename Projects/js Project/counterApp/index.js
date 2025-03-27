let num= document.querySelector(".num");
let count=0;


function incriment(){
    count++;
    
    num.textContent=count;
}
function decriment(){
    count--;
    num.textContent=count;
}


let inc= document.querySelector(".inc").addEventListener("click", incriment)
let decri= document.querySelector(".decri").addEventListener("click", decriment)

















