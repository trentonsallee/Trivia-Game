//question list
const questions = [

  {
  number: 0,
  question: "Am I pretty",
  answer: [
    { text: "No", isCorrect: false },
    { text: "Yes", isCorrect: false },
    { text: "Idk", isCorrect: false },
    { text: "LoL", isCorrect: true },
          ]},
  
  {
    number: 1,
    question: "Am I Handsom",
    answer: [
      { text: "No", isCorrect: false },
      { text: "kinda", isCorrect: false },
      { text: "mid", isCorrect: true },
      { text: "mmm, not really", isCorrect: false },
            ]},
  
    {
      number: 2,
      question: "Am I cute",
      answer: [
        { text: "No", isCorrect: false },
        { text: "Yes", isCorrect: false },
        { text: "Idk", isCorrect: false },
        { text: "LoL", isCorrect: true },
               ]},
      
      {
        number: 3,
        question: "Am I kind",
        answer: [
          { text: "No", isCorrect: false },
          { text: "kinda-ish not really", isCorrect: false },
          { text: "sometimes", isCorrect: true },
          { text: "mmm, not yes", isCorrect: false },
                ]},
  ]
  
//const start = document.querySelector(".startButton");


var secondsLeft = 45;

//starting quiz
function iterate(number) {


  //timer function
  var timeEl = document.querySelector(".time");
  
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      


  //write the question
  const question = document.getElementsbyId('question');
  question.questionText = questions[number].question;

  //getting the questions
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  const option4 = document.getElementById('option4');

  //getting the answer possibilities
  option1.questionText = questions[number].answer[0].text;
  option2.questionText = questions[number].answer[1].text;
  option3.questionText = questions[number].answer[2].text;
  option4.questionText = questions[number].answer[3].text;

  //getting if the answer is true or false
  option1.value = questions[number].answer[0].isCorrect;
  option2.value = questions[number].answer[1].isCorrect;
  option3.value = questions[number].answer[2].isCorrect;
  option4.value = questions[number].answer[3].isCorrect;


 //Clicking on the answer, true or not, next question

 var selected = "";

 option1.addEventListener("click", () => {

  if (option1.value == "true"){
    selected = "Correct!"
    number++;
    iterate(number);
    console.log(number);
  }
  else if (option2.value == "true"){
    selected = "Correct!"
    number++;
    iterate(number);
    console.log(number);
  }
  else if (option3.value == "true"){
    selected = "Correct!"
    number++;
    iterate(number);
    console.log(number);
  }
  else if (option4.value == "true"){
    selected = "Correct!"
    number++;
    iterate(number);
    console.log(number);
  }
  //if question is wrong, subtract 15 seconds from tiem score
  else {
  secondsLeft = secondsLeft - 15;
  selected = "inCorrect! 15 seconds subtracted from time"
  number++;
  iterate(number);
  console.log(number);
  }

 })


//closing bracket of time function
}
}, 1000);
}

}


//styling elementes

//change background on game start

//var startButton = document.querySelector(".starButton");

//function changeBackground(event) {
//  event.currentTarget.setAttribute( 
//    "style",
//    "background-color: #601A4A"
//  );
//}

//startButton.addEventListener("click", changeBackground);





//plan

//list all questions in an array
//list questions in an if else statement for true or not
//if true, add score, if false, subtract time 

//randomize the questions
//call the questions

//create time clock
//start clock on button
//when clock is zero, cmove to a different http page(same css)


// Selects element by class

// Selects element by id
//var mainEl = document.getElementById("main");









//on new "winners page" save into memory winners initials and score
