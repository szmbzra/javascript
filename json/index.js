const data = [
    {username: "sam", age: 29},
    {username: "samey", age: 30},
];
const datastrgng = JSON.stringify(data);
localStorage.setItem("data", datastrgng);
const accedata = JSON.parse(localStorage.getItem("data"));
console.log(accedata);