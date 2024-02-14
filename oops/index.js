/* // old method before constructor
function User(username, age){
this.username = username;
this.age = age;
this.active = false;
}


User.prototype.login = function(){
    console.log("login");
}
User.prototype.logout = function(){
    console.log("logout");
}

const UserOne = new User("sam", 30);
console.log(UserOne.username);
UserOne.login();
UserOne.logout();

function Student(username, age, semester, rank){
User.call(this, username, age);
this.semester = semester;
this.rank = rank;
}
Student.prototype = Object.create(User.prototype);
Student.prototype.updateRank = function(newRank){
this.rank= newRank;
console.log(this.rank);
}


const StudentOne = new Student("sam", 455, 45, 67);
console.log(StudentOne.username);

console.log(User.prototype); */