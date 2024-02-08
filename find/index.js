/* find function
 const numbers =  [7, 12,  8, 8, 8, 13];
const findNumers = numbers.find(num=> num === 71);
console.log(findNumers); */

// sort 
/* const numbers = [2, 4, 23, 45, 45];
numbers.sort();
console.log(numbers); */
/* const numbers = [10, 5, 20, 2, 3];
numbers.sort((a, b)=>{
return b-a;
});
console.log(numbers); */
/* const movies = [
    {name: "Mollie", rating: 2},
    {name: "Miguel", rating: 76},
    {name: "Rachel", rating: 85},
    {name: "Lola", rating: 24}
];
movies.sort((a, b)=> a.rating - b.rating );

console.log(movies); */
/* const number = [4, 2,5,6,7,8,9];
// number.sort();
number.reverse();
console.log(number); */

// chaning
const number  = [12,34,45,7,87,8,9];
const filterNUmbers = number.reverse().filter(num=>num >10).map(num=> num+1);;
;

console.log(filterNUmbers);
