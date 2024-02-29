    // let text = document.querySelector(".text");
    // console.log(text.parentNode);
    let parent = document.querySelector(".second");
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);
    // console.log(parent.childNodes);
console.log(parent.previousElementSibling);
console.log(parent.nextElementSibling);
//

let div = document.createElement("div");
div.innerHTML = "<p>hello world</p>";
document.body.appendChild(div);
div.id ="title";
div.className ="title df";
console.log(div);

let list = document.createElement("li");
list.innerHTML = "contact us";
menu.appendChild(list);
parentNode.replaceChild()
originalnode.clonenode();

let menu = document.getElementById("menu");
// menu.insertAdjacentHTML("afterbegin", "<li>hello wolrd </li>");
let newnode = menu.cloneNode(false);
// parentNode.removeChild(childnode);
/*  
parentNode.insertBefore(newnode, existingnode)
menu.insertBeofre(neNode, menu.firstChlld)
;*/
menu.removeChild(menu.lastElementChild);
console.log(newnode);

let input = document.getElementById("username");
// console.log(input.attributes);
// console.log(input.getAttribute("placeholder"));
// input.setAttribute("class","user_name");
// input.removeAttribute("placeholder");
console.log(input.hasAttribute("placeholder"));
console.log(input);


// inputbox.style.cssText += "width: 200px; height: 50px;" // rewrite override inline css
// console.log(inputbox); 
// console.log(inputbox.style.backgroundColor);
// window.getComputedStyle(inputbox);
// console.log(window.getComputedStyle(inputbox).backgroundColor);
classs.className += " pink";

// let classs = document.getElementsByClassName("hello");
// inputbox.classList.add("yomna", "asdas");
// inputbox.classList.replace("hello", "bakra");
// inputbox.classList.contains("hello");
// console.log(inputbox.classList.contains("hello"));
let check = inputbox.classList.contains("hello");
console.log(check);