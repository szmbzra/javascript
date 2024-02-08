// to convert to entire array and turn into one value
// const numbers = [1, 2, 3, 4, 5];
/* const reduceNumbers = numbers.reduce((total, current)=>{
    total = total+ current;
    return total;
}, 0);
console.log(reduceNumbers); */
// const reduceNumbers = numbers.reduce((total, current)=>{
//     total = total * current;
//     return total;
//     }, 1);
//     console.log(reduceNumbers);
const students = [
{name:"Bryan", marks: 8},
{name:"Dominic", marks: 3},
{name:"Mable", marks: 4},
{name:"Johnny", marks: 3},
{name:"Marc", marks: 8},
{name:"Owen", marks: 6},
{name:"Alta", marks: 7}
];
const reduceStudents = students.reduce((total, current)=>{
if(current.name === "Alta"){
    total = total + current.marks;
}
return total;
}, 0);
console.log(reduceStudents);