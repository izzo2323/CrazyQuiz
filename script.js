var startPageEl = document.getElementById("start-page");
var qaPageEl = document.getElementById("qa-page");
var resultsEl = document.getElementById("results");
var startButtonEl = document.getElementById("start-btn");
var submitButtonEl = document.getElementById("submit-btn");
var timerEl = document.getElementById("time");

var clock = 5;
var currentQuestionIndex = 0;
var playerScore = 0;
var timeInt;
var quizList = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "question #2",
        choices: ["a", "b", "c", "d"],
        answer: "c"
    },

    //add 3 more questions, change first 2
]

function startGame() {
    startPageEl.setAttribute("class", "hide");
    qaPageEl.setAttribute("class", "show");
    timerEl.textContent = clock
    timeInt = setInterval(countDown, 1000)
    displayQa();
}

function countDown() {
    clock--
    timerEl.textContent = clock
    if (clock <= 0) {
        //stop timer 
        clearInterval(timeInt);
        //new function endquiz - result  
        gameOver();

    }
}

function displayQa() {
    var currentQuestion = quizList[currentQuestionIndex];
    console.log(currentQuestion);

    var questionEl = document.getElementById("display-question");
    questionEl.textContent = currentQuestion.question;

    var answerEl = document.getElementById("answer-1");
    //display text 
    answerEl.textContent = currentQuestion.choices[0];
    //setting value 
    answerEl.value = currentQuestion.choices[0];
    //onclik event 
    answerEl.onclick = validate;
    console.log(answerEl);

}

function validate() {
    console.log(this.value);
    if (this.value === quizList[currentQuestionIndex].answer) {
        playerScore = playerScore + 5;
    } else {
        clock = clock - 10;
    }
    //Move to next Question 
    currentQuestionIndex++;

    displayQa();
}

function gameOver() {
    alert("Game over")
}

startButtonEl.onclick = startGame;