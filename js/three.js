//strings literals / isay alag alag likh saktay  

let ma = `ma
usama
ho`
console.log(ma);

//  LOOPS
// FOR LOOP
// WHILE LOOP
// DO WHILE LOOP

//for loop

for(let u = 1; u<=10; u++){
    console.log("2 x " , u , "=", u*2);
}

for(let s =1; s<=10; s++){
    console.log(`3 x ${s} = ${s*3}`);
}

// let tb = prompt("enter your table number");  //issay jo num likhay gay table ayega 
// console.log(tb);
// for(let t=1; t<=10 ; t++){
//     console.log(`${tb} x ${t} = ${tb*t}`);
// }

// let word = prompt("enter yout name");  // isme jo likhay gay wo ayegaaa mr kay agay 
// for(let p=1 ; p<=10; p++){
//     console.log("Mr", word , math.random());
// }

//while loop

let a = 20;
while(a=28){
    console.log("this is while loop" , a);
    a++;
}

do{
    console.log("this is do while" , a);
    a++;
}
while(a<=20);

//enter your name me 10 likhay gay to you win agr kuch or likhay gay to wrong num 
let gm = 10;
let pm = prompt("enter your num");
while(gm!=pm){
    pm = prompt("wrong num");
}
alert("you win")