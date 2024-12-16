for(let p=1; p<=10; p++){
    for(let m=1; m<=p; m++){
        document.write("u")
        }
        document.write("<br>")
}
//If else 

let age = 20;
if(age<=20){
    console.log("you can drive a car");  
}
else{
    console.log("you can not drive a car");
}

let userAge = 18;
let cnic = true;
if(userAge <=18){
    console.log("you can eligible for vote");
    if(cnic ==true){
        console.log("you can cast for vote");
    }
    else(console.log("you can't cast for vote"));
}
else{
    console.log("you can't eligible for vote");
}

for(let i=1; i<=10; i++){
    if(1%2 == 0){
        console.log("this is even", i); 
    }
    else(console.log("this is odd", i));
}


let mode = prompt(`enter your mode
1) dark
2)light`);
let color = "";

if(mode =="dark"){
    color = "black"
}
else if(mode == "light"){
    color = "white"
}
else{
    color = "not fount your color"
}
alert(`your them color is ${color}`)