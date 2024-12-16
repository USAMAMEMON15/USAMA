a = "2",
b = "10",

console.log([a*b]);
console.log( [a/b]);
console.log( [a-b]);


//COMPARISON OPERATOR
// > greaterthen
// < lessthen
// >= right side wali value left value kay under ho ya equel ho
// <= left side wali value right value kay under ho ya equel ho
// ==
// ===


console.log(20>=30); // false
console.log(20>20); // falsa
console.log(20<=70); // true 
console.log(20==="20"); // false
console.log(20=="20"); //true

// LOGICAL OPERATOR
// AND && dono true hoto true 
// OR || ek bhi true hoto true 
// NOT ! false ko true me or true ko false me kerta ha 

// OR
console.warn("this is OR"); 

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); //true
console.log(false || false); //false
console.log(!false || false); //true  this is a NOT 

//AND
console.warn("this is AND");

console.log(true && true); // true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false
console.log(true && !false); //true  this is a NOT 



// INCREAMENT OR DECREAMENT
// POST //badmay// increamnet me pehle print hoga bad me add hoga
// PRE //pehle// increament me pehle add hoga bad me print hoga 

let m = 250;
//  console.log(m++); // this is post
console.log(m); 
// console.log(++m); // this is pre

  m += 250; // m = m+200; m = 25+200 = 225

  console.log(m);

  m -= 100;
  console.log(m);

  m-= 25;
  console.log(m);

  m*= 5;
  console.log(m); 
