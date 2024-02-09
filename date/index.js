/* const now = new Date(2/8/2024);
const old = new Date('1/8/2024'); */
/* console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.toDateString());
console.log(now.toLocaleDateString()); */
/* console.log(now.getTime());
console.log(now.toLocaleDateString());
console.log(old);
const gap = now - old;
console.log(Math.round(gap/1000/60/60/24)); */
const old = new Date('Wed Feb 07 2024 19:53:33');
const now = new Date();

const gap = now - old;
const post = (Math.round(gap/1000/60/60/24));

console.log(`your post was ${post} day old`)

