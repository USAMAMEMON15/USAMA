//Function
function hellow(){
    console.log("this is a function");
}
hellow();
hellow();

//Funtion with paremeter
function sum(a , b){
    console.log("this sum of a + b is :" , a+b);
}
sum(10,10);

//Function with paremeter and return
function abc(q,w){
    return`the sum of q+w is ${q+w}` ;
}
let myValue = abc(20,20);
console.log(myValue);


function person(p_name , p_age , p_course , p_class){
    return`the person name is ${p_name} , age is ${p_age}, cours is ${p_course} , class is ${p_class}`
}
let personData = person("usama" ,"18", "web deveplomnet" , "11");
console.log(personData);


// function person(p_name , p_age , p_course , p_class){
//     return`the person name is ${p_name} , age is ${p_age}, cours is ${p_course} , class is ${p_class}`
// }

// let personName = prompt("enter your name ");
// let personAge = prompt("enter your age ");
// let personCourse = prompt("enter your course ");
// let personClass = prompt("enter your class ");
// let personData = person(personName,personAge,personCourse,personClass);
// console.log(personData);


//Fat arrow function
const student = ()=> console.log(5+5);
student()

//Fat arrow function with return
const dada = (y,z) =>{
    return y+z
}
let putValues = dada(70,190)
console.log(putValues);

setInterval(function(){
    document.write("wow")
},3000)

setInterval(function(){
    console.log("time out");
},3000)


