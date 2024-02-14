/*  
building blocks=>
blue prints
class are blue prints
object /instance
attribute / property
method 

// 4 pillars of oop 
encapsulation
inheritance
abstraction
polymorphism

inheritance eg:
great grand father -> grand faher-> father - > child

abstraction
instructor for eg:
name, age salary
poly means many 
morphism means  forms 

oops advantages
code re- usablitiy
improved integration
improved productivity
easy to main and upgrade
hide complexity
new is constructor call
*/
// object literals is different that object

// const userOne = {
// userName: "sam",
// fullName: "sam bajra",
// email: "sz@gmail.com",
// age: 30,
// login(){                     //this work as method not function
// console.log("login");
// },
// logout(){
//     console.log("logout");
// }
// };
// console.log(userOne.age);
// console.log(userOne.em

/*  class */
/* class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
        this.active = false;
        
    }
    login(){
        this.active = true;
        console.log(`your age is ${this.username} - ${this.active}`);
    return 5;
    }  
    logout(){
        this.active = false;
        console.log(`Logout ${this.username} - ${this.active}`);
        return 15;
    }

}
const UserOne = new User("sam", 30);
console.log(UserOne.login(UserOne));
console.log(UserOne.logout());
 */
class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
        this.active = false;
    } 
  
    login(){
        this.active = true;
        return this;
    }
    logout(){
        this.active = false;
        return this;
    }
    display(){
        if(this.active){
console.log(`username: ${this.username}, Age ${this.age}`);
    } else {
console.log("please login firt");
    }
}
  }
/* const userOne  = new User("sam", 25);
userOne.login().display(); */

// inheritance
class student extends User{
constructor(username, age, semester, rank){
    super(username, age);
    this.semester = semester;
    this.rank = rank;
}
updateRank(newRank){
this.rank = newRank;
console.log(this.rank);
}
display(){
    if(this.active){
console.log(`username: ${this.username}, Age ${this.age}, Semest: ${this.semester}, Rank ${this.rank}`);
} else {
console.log("please login firt");
}
}
}
const studentOne = new student("hari", 60, 20, 10);
// console.log(studentOne.rank);
// studentOne.updateRank(15);
studentOne.login().display();
