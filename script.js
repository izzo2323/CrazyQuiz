var startPageEl = document.getElementById("start-page");
var qaPageEl = document.getElementById("qa-page");
var resultsEl = document.getElementById("results");
var startButtonEl = document.getElementById("start-btn");
var submitButtonEl = document.getElementById("submit-btn");
var timerEl = document.getElementById("time");

var clock = 20;
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
        question: "What are variables used for in JavaScript Programs?",
        choices: ["Storing numbers, dates, or other values", "Varying Randomly", "Initiating an action", "None of the Above"],
        answer: "Storing numbers, dates, or other values",
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        choices: ["System.out.println('Hello World')", "println ('Hello World')", "document.write('Hello World')", "response.write('Hello World')"],
        answer: "document.write('Hello World')",
    },
    {
        question: "Inside what HTML element do you add our JavaScript file?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>",
    },
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

    var answerEl = document.getElementById("answer-2");
    //display text 
    answerEl.textContent = currentQuestion.choices[1];
    //setting value 
    answerEl.value = currentQuestion.choices[1];
    //onclik event 
    answerEl.onclick = validate;
    console.log(answerEl);

    var answerEl = document.getElementById("answer-3");
    //display text 
    answerEl.textContent = currentQuestion.choices[2];
    //setting value 
    answerEl.value = currentQuestion.choices[2];
    //onclik event 
    answerEl.onclick = validate;
    console.log(answerEl);

    var answerEl = document.getElementById("answer-4");
    //display text 
    answerEl.textContent = currentQuestion.choices[3];
    //setting value 
    answerEl.value = currentQuestion.choices[3];
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
    qaPageEl.setAttribute("class", "hide");
    resultsEl.setAttribute("class", "show");

}

startButtonEl.onclick = startGame;

//local storage

var localStorage = () => {
    localStorage.setItem("storagevalue", initials.textContent);
}

submitButtonEl.addEventListener('click', localStorage);

console.log(localStorage);
