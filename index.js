var predict = [
  "You will become extremely well off!",
  "You will become philanthropist",
  "You will become a lover!",
  "You will dress nice for a famous event!",
  "Undecided!",

  "You buy a nice comfortable travel house!",
  "You will get a brand spanking new car!",
];

let btn = document.querySelector("button");
let div = document.querySelector("div");
//let h1 = document.querySelector("h1");

function runPrediction() {
  let randomNumb = Math.floor(Math.random() * predict.length);
  const input = document.querySelectorAll('input').value;

  document.querySelector("h1").innerText = predict[randomNumb];


}
console.log(runPrediction[2]);

btn.addEventListener("click", runPrediction);
