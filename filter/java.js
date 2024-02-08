/* const rating = [5, 2, 3, 5, 7, 8, 9];
const filterrating = rating.filter(rate => rate> 6);
console.log(filterrating);
 */
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const even = numbers.filter((num)=>{
let result = num % 2 == 0;
return result;
});
console.log(even);

 const odd=  numbers.filter((num)=>{
let result = num % 2 ==0;
return !result;
 });
 console.log(odd); */

 const movies = [
    {name: "sam", rating: 0},
    {name: "saam", rating: 2},
    {name: "saaem", rating: 14},
 ];
 const filtermov = movies.filter((movie)=>{
return movie.rating <6;
 });
 console.log(filtermov);