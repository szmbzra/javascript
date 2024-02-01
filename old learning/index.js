/* let description = document.querySelectorAll('div p');
description.forEach((para)=>{
console.log(para);
});  */
/* let selector = document.getElementById("website-name");
console.log(selector);
let selectorClass = document.getElementsByClassName("active");
selectorClass[0].style.color ="Red";
console.log(selectorClass[1]); */

// let subHeading = document.querySelector(".sub-heading");
// subHeading.innerText += "<h1>my name is sam</h1>"

// controlling content
/* let h1Head = document.querySelectorAll("ul.footer-nav li");
h1Head.forEach((el)=>{
el.innerHTML = " <li>helloo</li>";
}); */
// const link = document.querySelector('a');
// link.setAttribute("href","ddfdsfds.com");
// console.log(link.getAttribute("href"));
// link.setAttribute("target","_blank");
/* const activeClass = document.querySelectorAll(".active");
activeClass.forEach(
    active =>{
        console.log(active.getAttribute("class"));
       active.setAttribute("class", "red") ;
       console.log(active.getAttribute("class"));
    }
); */
/* const branName = document.querySelector("#website-name");
branName.setAttribute("style","color:red;"); */ //this will overide existing inline css
// const brandName = document.querySelector("#website-name");
// console.log(brandName.style.margin);
// console.log(brandName.style.margin ="100px");
// brandName.style.margin = "100px";
/* console.log(brandName.style); */ //display all csslist in console
// const brandName = document.querySelector("h1");
// console.log(brandName.classList);
// brandName.classList.add("red");
// brandName.classList.remove("red");

/* const actiClas = document.querySelectorAll("li.active");
actiClas.forEach(actived=>{
    actived.classList.remove("active");
    actived.classList.add("inactive");
}); */
//relationship parents child sibilings
/* const topNav = document.querySelector(".footer-nav");
const topNavch =  Array.from(topNav.children);
topNavch.forEach(child=>{
    child.classList.add("random");
    console.log(child);
}); */
/* const brDa = document.querySelector("#website-name");
 */// console.log(brDa.parentElement);
/* console.log(brDa.parentElement.children); */
/* const blogHeading = document.querySelector(".blog-heading");
console.log(blogHeading.nextElementSibling);
console.log(blogHeading.previousSibling); */
// events
// const productAdd = document.querySelector("button");
// productAdd.addEventListener("click", ()=>{
//    productAdd.setAttribute("style","display:none");
// });

/* const products = document.querySelectorAll("li");
products.forEach(product=>{
product.addEventListener("click", (event) => {
//   console.log(event);
event.target.style.textDecoration = "line-through";
  console.log(event.target.style.textDecoration);
});
}); */
/* const products = document.querySelectorAll("li");
products.forEach(product=>{
product.addEventListener("click", (event) => {
    event.target.remove();
})

}); */
// const addProduct =  document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", ()=>{
//   addProduct.innerHTML += "<li>hello world</li>"
//   addProduct.innerHTML= "<li>hello world</li>" +  addProduct.innerHTML;
//     console.log(addProduct.innerHTML);
// });

/* const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
   const newLi = document.createElement("li");
   newLi.innerText = "New product";
   addProduct.prepend(newLi);
}) */

// event bubbling delegation

/* const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.textContent =" new product";
    addProduct.append(li); */
// });
// addProduct.addEventListener("click",(event)=>{
// if(event.target.tagName === "LI"){
    // event.target.remove();
/* console.log("ul called");
// };
// console.log(event);   
}); 
/* const newLi = document.querySelector(".active");
newLi.addEventListener("click", (event) =>{
    event.stopPropagation();
    console.log("li called")});  */          //event bubbling

/* const products = document.querySelector("ul");
const copyAlert = (event) =>{
    if(event.target.tagName === "LI"){
        alert(event.target.textContent);
    }
}
products.addEventListener("copy", copyAlert); */

/* const webPage = document.querySelector("body");
webPage.addEventListener("wheel", (event)=>{
    console.log(event.pageX, event.pageY);
})
 */
// form and events
 const form = document.querySelector(".feedback-form");
 const p = document.querySelector("p");
 const userPattern = /^[a-z0-9]{6,10}$/;
 const feedbackPattern= /^.{20,50}$/;

 form.addEventListener("submit", (event)=>{
    event.preventDefault();
const userResult = userPattern.test(form.username.value);
const feeback = feedbackPattern.test(form.feedback.value);

if(userResult && feeback){
p.setAttribute("class","success");
p.textContent =" feed back submitted";
    }else{
     p.setAttribute("class","error");
     p.textContent =" feed back not submitted";

    }
 });
 form.username.addEventListener("keyup", (event)=>{
    const userResult = userPattern.test(form.username.value);
if(userResult){
    form.username.setAttribute("class","accepted");
}else {
    form.username.setAttribute("class","rejected");
}
 })
