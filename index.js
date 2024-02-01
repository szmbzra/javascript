const form = document.querySelector(".quiz-form");
const correcAnswer = ["A","A","A","A","A"];
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");
form.addEventListener("submit", event=>{
    event.preventDefault();

  let score = 0;
    
  const userAnswers = [form.q1.value,
  form.q2.value,
  form.q3.value,
  form.q4.value,
  form.q5.value
  ];

  userAnswers.forEach((answer, index)=>{
if(answer === correcAnswer[index]){
 score +=1;
 question[index].classList.add("correct");
}else{
  question[index].classList.add("wrong");
}
  });
  console.log(score);
  scrollTo(0,0);
  result.classList.remove("hide");
result.querySelector("p").textContent =`you scored ${score}/5`;
});