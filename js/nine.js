//DOM

let elem =document.getElementsByClassName("usama")
console.log(elem);
 
let head = document.getElementsByTagName("h1")
head[0].innerHTML="usama"
console.log(head[0]);
head[0].style.backgroundColor="black"
head[0].style.color="white"




let input =document.createElement("input");
elem[0].appendChild(input);
input.placeholder="enter your name"
input.style.marginLeft="600px"
input.style.padding="15px"


let btn =document.createElement("button");
elem[0].appendChild(btn);
btn.textContent="click"
btn.style.padding="15px"

//event
btn.addEventListener("click", function(){
    input.value="java"
    head[0].innerHTML="shayan"
    btn.textContent="done"
    head[0].style.backgroundColor="blue"
    head[0].style.color="black"
})
btn.addEventListener("dblclick", function(){
    input.value="css"
    head[0].innerHTML="hammad"
    btn.textContent="dbldone"
    head[0].style.backgroundColor="red"
    head[0].style.color="black"
})