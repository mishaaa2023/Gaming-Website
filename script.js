const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")
let userChoice;
let ComputerChoice;
let result;

possibleChoices.forEach(possibleChoices =>possibleChoices.addEventListener('click',(e)=>{
  userChoice =e.target.id
  userChoiceDisplay.innerHTML=userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  const RandomNumber=Math.floor(Math.random()*3)+1
 
  if(RandomNumber === 1){
    ComputerChoice="rock"
  }
  if(RandomNumber === 2){
    ComputerChoice="paper"
  }
  if(RandomNumber === 3){
    ComputerChoice="scissors"
  }
  computerChoiceDisplay.innerHTML=ComputerChoice
}

function getResult (){
  if(ComputerChoice==userChoice){
    result="It's a draw!"
  }
  if(ComputerChoice==='rock'&& userChoice==="paper"){
    result="User Won!"
  }
  if(ComputerChoice==='rock'&& userChoice==="scissors"){
    result="Computer Won!"
  }
  if(ComputerChoice==='paper'&& userChoice==="rock"){
    result="Computer Won!"
  }
  if(ComputerChoice==='paper'&& userChoice==="scissors"){
    result="You Won!"
  }
  if(ComputerChoice==='scissors'&& userChoice==="rock"){
    result="You Won!"
  }
  if(ComputerChoice==='scissors'&& userChoice==="paper"){
    result="Computer Won!"
  }
 resultDisplay.innerHTML=result
}

