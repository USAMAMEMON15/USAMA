//promise 
let promiseOne = new Promise(Function(){
    setimeout(Function(){
        console.log("this is a first promise");
    },3000)
})

let promiseTwo = new Promise(function(resolve,reject){
    setimeout(function(){
        resolve({name : "usama" , age :"18"})
    },3000)
})
promiseTwo.then(function(a){
    console.log(a);
})

let promiseThree = new Promise(function(resolve,reject){
    setimeout(function(){
        resolve({name :"shayan",age :"19"})
    },3000)
}).then(function(abc){
    return sbc
}).then(function(q){
    console.log(q.name);
})

let promiseFour = new Promise(function(resolve,reject){
    setimeout(function(){
        let error = true;
    if(!error){
        resolve({name :"hammad",age : "20"})
    }
    else{
        reject("error :something have been wrong!")
    }
    },3000)
}).then(function(data){
    return data:
}).then(function(a){
    console.log(a.age);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise has been resolve pr reject!");
})

let promiseFive = new Promise(function(resolve,reject){
    setimeout(function(){
        let error = false;
    if(!error){
        resolve({name :"wahab",age : "21"})
    }
    else{
        reject("error")
    }
    },3000)
  })  

//ASYNCHRON0US FUNCTION
async function hellow(){
    try{
        let response = (response):
    }
    catch(error){
        console.log(error);
    }
}
hellow()

//issay json ka data ata hay 
async function getUsers(){
    try{
        let response = await fetch("")
        let data = await response.json();
        document.write(JSON.stringify(data));
    }
    catch{
        console.log("error");
    }
}
getUsers()