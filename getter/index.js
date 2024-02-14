class User{
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    get fullName(){
return ` ${this.first} ${this.last}`;
    }
    set fullName(newValue){
const [first, last] = newValue.split(" ");
this.first = first;
this.last = last;
    }
}
const guest = new User("sam", "bara");
console.log(guest.first);
console.log(guest.last);
console.log(guest.fullName);

guest.first ="sam";
guest.fullName ="SAM BJARA";
console.log(guest.fullName);