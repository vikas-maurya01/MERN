let content= document.querySelector("p");
let click=document.querySelector(".sub-Btn");
let resetBoard=document.querySelector(".rst-btn");
let number= parseInt(content.innerText);

let incrise= function Name(){
    number+=1;
    content.innerText=number;
}
let reseet = function reset(){
    number=0;
    content.innerText=number;
}
click.addEventListener("click", incrise);
resetBoard.addEventListener("click", reseet)



// let myDiv=document.createElement("div");
// for (let i = 1; i <=100; i++) {
//     let paraChild=document.createElement("p");
//     paraChild.textContent="I am Para no."+i;
    
//     paraChild.addEventListener("click",function(){
//         console.log("para have clicked"+i);
//     });
    
//     myDiv.appendChild(paraChild);
    
// }
// document.body.appendChild(myDiv);