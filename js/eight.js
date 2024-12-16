//DOM


let elem =document.getElementById("tree");
console.log(elem);
elem.innerHTML="hellow !"
elem.style.backgroundColor="black"
elem.style.color="white"
elem.style.textAlign="center"
elem.style.padding="30px"
elem.style.fontSize="30px"

let box = document.getElementsByClassName("con");
console.log(box[0]);
box[0].innerHTML="usaamaa"
box[0].style.backgroundColor="black"
box[0].style.color="white"
box[0].style.fontSize="50px"
box[0].style.textAlign="center"

let newElem =document.createElement("p");
box[0].appendChild(newElem);    
newElem.innerHTML="this is a new heading";
newElem.style.color="blue"

let img =document.createElement("img");
box[0].appendChild(img);
img.src="/pexels-samerdaboul-1627933.jpg"
img.style.height="100px"
img.style.borderRadius="100px"


let head = document.getElementsByTagName("h1");
head[0].innerHTML="first headingf";
console.log(head[0]);

head[1].innerHTML="secend heading"
console.log(head[1]);

head[0].id="usama"
head[0].className="shayan"
head[0].classList.add("four")


