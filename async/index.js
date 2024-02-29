/* set time out
 console.log("a");
const random = function(){
    const numone = 5;
    const numtwo =10;
    console.log(numone + numtwo);
}
const welcome = function(){
console.log("A");  
random();  
console.log("b");    
}
setTimeout(welcome, 2000); */

//  set interval
/* console.log("A");
const logInternval = setInterval(()=>{
    console.log("interval");
},1000);
clearInterval(logInternval);

console.log("c"); */
// call back
/* console.log("start");
function loginUser(email, password, callback){
setTimeout(()=>{
    userDate = {userid: 100, status: "sccuess"};

    callback(userDate);
},2000);
}
const data = loginUser ("asdas", "randome", (value)=>{console.log(value)}) */

// promise
/* 
console.log("start");
const twitterProfile = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        userData = {userId: 512, status: "success"};
        console.log("inside twitter profile");
        resolve(userData);
    }, 2000);
});

const instaProfile = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        userData = {userId: 782, status: "success"};
        console.log("instagram profile");
        resolve(userData);
    }, 200);
});
Promise.all([twitterProfile, instaProfile]).then(()=>{
  (  data => console.log(data));
});
console.log("finish"); */

// async and await
/* console.log("start");
function loginUser(email, password){
return new Promise((resolve, reject)=>{
setTimeout(()=>{
    userData = {userId: 782, status: "success"};
    console.log("inside login user");
    resolve(userData);
},200);
});
}

function getUserTweet(email, password){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        tweetData = {tweet:1, contet: "abc"},{tweet2: 2, content: "asdsa"};
        console.log("inside twitter data");
        resolve(tweetData);
    },200);
    });
    }
function getUserTweetComment(tweetID){
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
commentData = [{commenti:1, content: "aasdas"}];
console.log("user tweet comment");
reject("not working");
},300);
    });
}
    
async function displayData(){
    try{
        const userData =  await loginUser("s@gmail.com", "radom");
        const tweetData =  await getUserTweet(userData.userId);
    const commentData = await getUserTweetComment(tweetData[0].tweetID);
    }
    catch(error){
console.log(error);
    }

}
displayData(); 

console.log("finish"); */


// api json  https://jsonplaceholder.typicode.com/
// jsonplaceholder fake api

/* fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error => console.log(error)); */

// const getPosts = () =>{
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(response=> response.json())
//     .then(data=> console.log(data))
//     .catch(error => console.log(error));
// }
// getPosts();
// const getPosts = () =>{
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(response=> response.json())
// .then(posts => {
// posts.forEach(post => {
//     console.log(post.id)
// });
// })
// .catch(errpr => console.log(error));
// }
// getPosts();

// const baseURL = "https://jsonplaceholder.typicode.com"


// async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
// const posts = await response.json();

// posts.forEach(post => console.log(post.body));
// console.log(posts);
// }
// getPosts();

const baseURL = "https://jsonplaceholder.typicode.com";
// function getPost(endPoint){
//     fetch(baseURL + endPoint)
//     .then(response => response.json())
//     .then(data => console.log(data))  
//     .catch(error => console.log(error));
// }
// getPost("/posts/");

function addNewPost(endPoint){
    fetch(baseURL + endPoint,{
        method: "POST",
        body: JSON.stringify({
title: "new post",
body: "long edes",
userId :1
        }),
        headers:{
            'content-type' : 'application/json; charset-UTF-8',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
addNewPost("/posts/");

