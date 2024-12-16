//Mark sheet 

let math = parseInt(prompt("enter yout math number"));
let comp = parseInt(prompt("enter yout comp number"));
let isl = parseInt(prompt("enter yout isl number"));
let pst = parseInt(prompt("enter yout pst  number"));
let eng = parseInt(prompt("enter yout eng number"));
let obtainedMarks = math + comp + isl + pst + eng;
console.log(obtainedMarks);
let totalmarks = 500;
let per = obtainedMarks/totalmarks*100;
console.log(per);
// console.log(per/totalMarks);
if(per >=90 && per<=100){
    console.log("your grade is A+1");
}
else if(per >=80 && per<=90){
    console.log("your grade is A+");
}
else if(per >=70 && per<=80){
    console.log("your grade is A");
}
else if(per >=60 && per<=70){
    console.log("your grade is B");
}
else if(per >=50 && per<=60){
    console.log("your grade is C");
}
else if(per >=40 && per<=50){
    console.log("your grade is D");
}
else if(per >=33 && per<=40){
    console.log("your grade is E");
}
else{
    console.log("you are fail");
}
