//DOM EVENT 


let mq =document.getElementById("mq");
let img =document.getElementById("img");
let btn =document.getElementById("btn");

btn.addEventListener("click",function(){
    if(btn.textContent.includes("on") && mq. textContent.includes("on")){
        img.src="/pexels-samerdaboul-1627933.jpg";
        btn.textContent="turn off"
        mq.textContent="turn off"
        btn.style.backgroundColor="yellow"
        mq.style.backgroundColor="red"
    }
    else if(btn.textContent.includes("off") && mq. textContent.includes("off")){
        img.src="/pexels-samerdaboul-1627933.jpg";
        btn.textContent="turn on"
        mq.textContent="turn on"
        btn.style.backgroundColor="yellow"
        mq.style.backgroundColor="red"
    }    
})

