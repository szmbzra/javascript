import connect, {username as n, age} from "./config.js";

import{convert} from "./helper.js";


const currency = convert(20);
console.log(currency);
console.log(n, age);
console.log(connect());
console.log(age);