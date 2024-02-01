/* let firstName = "sam";
let random = "lear more";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(random.indexOf("e"));
console.log(random.lastIndexOf("e"));
console.log(random.replace("r", "-"))
console.log(random.substring(1,3));
console.log(random.slice(1,8));
console.log(random.replace("lear", "sam"))
var d= new Date();
var e =d.getFullYear();
console.log(e); */

/* let radius = 15;
const pi = 3.14;
let result = "my name is " + radius + "and pie is " + pi;
console.log(result); */
/* radius--;
console.log(radius); */
/* radius -=5;
console.log(radius); */

/* let firstName = "sam";
let LastName = "Bajracharya";
let result = `<h1>${firstName}</h1>`;
console.log(result); */
// let products = ["sam", "bsfs","drtr","ert","frr"];
// let update = ["honda", "Water"];
/* products[3] = "pizza";
console.log(products.length); */
/* let prd = products.join(", ");
console.log(products.indexOf(15)); */
// let prdouctMethos = products.concat(update);
// let prdouctMethos = products.push("bajra");
// console.log(products);
/* let prdouctMethos = products.shift("sam");
console.log(products); */

/* let value = [true, false, "trues", "false"];
console.log(value);
let email = "Sz@gmail.com";
console.log(email.includes("Sz")); */

/* let random = "25";
console.log(typeof random);
let age = Number(random);
console.log(typeof age);

let year = 1996;
console.log(typeof year);
let yearstrng = string(year);
console.log(typeof yearstrng);
 */

// control flow no. 21
/* let students = ["sam","hari", "sita", "test"];
students.push("bajra"); */
/* for(let i=0; i<=3; i++){
console.log(students[i]);
}
 */
// for loop in and of
/* for(let student of students){
console.log(student);
access to all value even they empty value and key pair
it can work with array but not key value
direct access to value
} */
/* for(let hero in students){
console.log(students[hero]);
for accessing key value index value
} */

/* const student = {
    username: "san",
    age: 28
};
for (let stu in student){
    console.log(student);
} */

//  let students = ["sasm","hari", "sita", "test", "sadsa"];
/*  let count = 0;
 while(count< students.length){
    console.log(students[count]);
    count++;
 } */
//  do while
/* let count = 10;
do{
  console.log(count);
  count++; 
} while(count<=5); */

/* let score = 9;
if(score <7){
  console.log("good job");
} */
/* let students = ["sasm","hari", "sita", "test", "sadsa"];
if(students.length >= 5){
  console.log("we have student");
}else{
console.log("out of condition");
} */
/* const login = 1;
if(login){
  console.log("logined");
  }else{
    console.log("log off");
  } */
  // let signal = prompt("your color");
/* let signal = "red";
  if(signal == "red"){
    console.log("stop");
  }else if(signal =="yellow"){
console.log("be ready");
  }else if(signal =="green"){
console.log("go");
  }else{
    console.log("not found");
  } */

/*   let password  = "122 243242342342@";
  if(password.length >=12 || password.length >=8 &&password.includes("@")){
    console.log("strong");
  }else if(password.length>=5 && password.includes("@")){
    console.log("medium");
  }else{
    console.log("weak");
  } */
/* let ratings = [ 0, 7, 8, 8];
for(let i = 0; i < ratings.length; i++){
if(ratings[i] == 0){
  console.log(`Rating: ${ratings[i]} - skip`);
 continue;
}
if(ratings[i] == 8){
  console.log(`Rating: ${ratings[i]} - must watch`);
  break;
}
console.log(`Rating: ${ratings[i]}`)
} */
// switch statement
// let rating = 7;
// switch(rating){
// case 5:
//   console.log("must watch");
//   break;
//   case 6:
//   console.log("mus not watch");
//   break;
//   case 7:
//   console.log("download complete");
//   break;
//   default:
//     console.log("sorry");
// }
// scope global
/* let scrore = 70;
if(scrore <80){

  let sscore = 90;
console.log("inside < 80 block", scrore, sscore);
if(scrore >65){
  console.log("inside > 65 block", sscore);
}
}
console.log("inside global block", scrore );
 */

/* const username ="Samddd ";
username.length >5 ? (console.log("true")) :(console.log("bye")); */
// const username ="Abc";
// const result = username.length <= 2 ? console.log("ok") : console.log("not");
// function sam(a, b){
//   return a + b;
// }
// console.log(sam(12,2));
// function ram(){
//   console.log("yo man");
// }
// ram();
// let into = function(){
//   console.log("Asdasd");
// }
// into(); 
// arguement

/* function welcome(name){
  console.log(`welcome ${name}` ) ;
}
welcome("hari"); */
/* function  add(a,b=""){
  let result = a +b;
  console.log(result);
}
add(1); */
// let welcome = (name) =>{
//   console.log(`welcome ${name}`);
// }
// welcome("sam");
// return keyword can be removed 
// let add = (a,b) => a + b; 
// console.log(add(2,3));
// for one paramanter
/* let welcome = name => `welcome ${name}`;
console.log(welcome("sam".toUpperCase()));  */       // function methods

// foreach
// call back function
/*  let addition = function (a, b){
  return a + b;
 }
 let multipe = function (a, b){
  return a * b;
 }
function calc(num1, num2, add, multi){
let addresult = add(num1, num2);
let multresult = multi(num1, num2);
return `add: ${addresult}, multi: ${multresult}`;

}
console.log(calc(5, 20, addition, multipe)); */

// let products = ["Eg3434g", "fds", "334", "fghgf"];

/* let callback = (product)=> console.log(`my product is ${product}`);
products.forEach(callback); */
// products.forEach((product)=> console.log(product.length));
// products.forEach((product, index)=>{console.log(product, index)});
// const print = (products, index) =>{
//   console.log(products, index);
// }
/* products.forEach(print);
array(it store only one types of information age or name) is good for storing user login and logout
object literals(it can store multiple property) is better than array
let user = {
  name: "sam shk",
  email : "ass@g.com",
  age: 30,
  isloggedIn: false
};
console.log(user.name);
user.isloggedIn = true;
console.log(user["age"]);
let key = "email";
console.log(user[key]);
console.log(typeof user); */
let random = "hello";

let user = {
  name: "sam shk",
  email : "ass@g.com",
  age: 30,
  isloggedIn: false,
  login: function(){
    this.isloggedIn = true;
    return `login ${this.email}`;
  },
  // logout: function(){
  //   console.log("log out");
  //   return "logigg out";
  // } or ( cant defined arrow function)
  logout(){
    console.log("log out");
    return "logigg out";
  }
};
/* console.log(user);
console.log(user.email);
user.login();
console.log(user.login("sam"));
console.log(random.toUpperCase()); */
// this keywor
// console.log(user.login());
/* 
this keyword refer to object if it call inside object */
// if this key word call inside global scope then it will be avaialbe for windows
// 46. object in array
/* let users = {
  "name": "sam bajra",
"age" : 29,
"email" : "szm@gmail.com",
isloggedIn:false,
blogs:[
  {title: "blog1", numcomme:5, wor: 643},
  {title: "blog2", numcomme:7, wor: 64553}
],
allBLg: function(){
  this.blogs.forEach(blogs=>console.log(blogs.title));
}
} */
// console.log(users.blogs[0].title);
// users.allBLg();
// const num = 15.4;
// let result = Math.random();
// console.log(Math.round(result *1000));
// 48.  primitive vs reference types
/* let numOne = 15;
let numTwo = numOne;
numOne = 30;
console.log(numOne);
console.log(numTwo);

let aB = {title: "Learning Java", ranks: 2};
let aC = aB;
aB.ranks =1;
console.log(aB);
console.log(aC);
aB.ranks =3;
console.log(aB);
console.log(aC); */
// spread operator 
// let ab = ["Sa", "gfd"];
// let bc = [...ab,"sadas","asdas"];
// console.log(ab);
// console.log(bc);

// let ObjOne = {title: "hello", rank:2};
// let ObjTwo = {...ObjOne, Publish: "2022", rank:50};
// console.log(ObjTwo);
// DOM Manipulation document object module

