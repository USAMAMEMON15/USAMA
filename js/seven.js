let fruits = ["apple" , "mango","orange","pineapple"];
console.log(fruits);
    fruits[1] = "yellow";
    console.log(fruits);
    
//method of ARRAY
//push
//pop
//shift
//unshift
//slice
//splice

//push last index me element ko add kerta hay
fruits.push("kiwi");
console.log(fruits);

//pop last index ke element ko remove kerta hay
fruits.pop()
console.log(fruits);

//shift first index me remove kerta hay 
fruits.shift()
console.log(fruits);

//unshift first index me add kerta hay
fruits.unshift("strawberry")
console.log(fruits);

//slice  (4) ['strawberry', 'yellow', 'orange', 'pineapple']
console.log(fruits.slice(0,4));

//splice 2 kay bad add 1 delete 
fruits.splice(2,1,"usama","usman")
console.log(fruits);

//concat hay name or cast concat ho rhi hay 
let name = ["riaz","fiaz","waqas","sherry"];
let cast = ["memon","sindhi","urdu speaking","punjabi"]

let info = name.concat(cast);
console.log(info);

 



 
