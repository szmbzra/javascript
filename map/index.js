/* const numbers = [10, 20, 30, 40, 50];
const mapNumber = numbers.map((num)=>{
if(num >30){
    return num +5;
    }else{
        return num;
    }
});
console.log(mapNumber); */

const products = [
{name:"asam", price: 20, tax: 0.5},
{name:"asam", price: 50, tax: 0.5},
{name:"asam", price: 40, tax: 0},
{name:"asam", price: 250, tax: 0}
];
const mapProduct = products.map((product)=>{
const newPrice = product.price + product.price*product.tax;
return{
    name: product.name,
    price: newPrice,
    tax: product.tax
}
});
console.log(mapProduct);