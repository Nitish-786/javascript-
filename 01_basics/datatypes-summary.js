//# primitive
//7 types : string, number, boolean, null, undefined, symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
 console.log(id === anotherId);

 const bigNumber = 2315615645866564564989816n



//reference type (non-primitive)

//Array, object, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "nitish",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive), Heap (non-premitive)
let myYoutubename = "nitishknitish@gmail.com"

let anothername = myYoutubename
anothername = "world4"
console.log(myYoutubename);

console.log(anothername);
let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "nitish@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


