var startButton = document.getElementById("start-btn");
var score = 0;
var startQuizDiv = document.getElementById("startpage");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionEl = document.getElementById("questions");
var answerButtonsEl = document.getElementById("answer-buttons");
var quizBody = document.getElementById("quiz");
var currentQuestionIndex = 0;
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreInputName = document.getElementById("intials");
var highscoreDisplayName = document.getElementById("highscore-intials");
var quizTimer = document.getElementById("timer");
var timeLeft = 60;
var timerInterval;
var submitScoreButton = document.getElementById("submitScore");
var endGameButtons = document.getElementById("endGameButtons");
var correct;
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");
var gameoverDiv =document.getElementById("gameover");

var questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: [
     "Strings",
     "Booleans",
     "Alerts",
     "Numbers", ] ,
    correctAnswer: "C" 
},
 
{
    question: "The condition in an if I else statement is enclosed within _______.",
    answers: [
    "quotes",
    "curly brackets",
    "parentheses",
    "square brackets", ] ,
    correct: "C"
},
{
    question: "Arrays in JavaScript can be used to store __________.",
    answers: [
     "numbers and strings",
     "other arrays",
     "booleans",
    "all of the above", ] ,
    correct: "D"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: [
    "commas",
    "curly brackets",
     "quotes",
    "parentheses", ] ,
    correct: "D"
},
{
    question: "A very useful tool used during development and deugging for printing content to the debugger is:",
    answers: [
     "Javascript",
     "terminal/bash",
     "for loops",
    "console.log", ] ,
    correct: "D"}

    ]

    function generateQuizQuestion(){
        gameoverDiv.style.display = "none";
        if (currentQuestionIndex === finalQuestionIndex){
            return showScore();
        } 
    }
var finalQuestionIndex = questions.length;

var shuffledQuestions
startButton.addEventListener("click", startQuiz);

timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
}, 1000);
quizBody.style.display = "block";

function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide")
    currentQuestionIndex = 0;
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    questionContainerElement.classList.remove("hide")
    generateNextQuestion(index);
}

function generateNextQuestion(index) {
    resetState()
    index++;
    showQuestion(questions[index])
}

function showQuestion(questions) {
    questionEl.innerText = questions.question
    questions.answers.forEach( answer => {
        const button = document.createElement("button")
        button.innerText = answer 
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
    }
}

function selectAnswer(c) {
    const selectedButton = c.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
// function mixQuestions(){
// if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove("hide")
// } else {
//     startButton.innerText = "Restart"
//     startButton.classList.remove("hide")
// }
// nextButton.classList.remove("hide")
// }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")

}

function checkAnswer(answer) {
    correct = questions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateNextQuestion();
        //display in the results div that the answer is correct.
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateNextQuestion();
        //display in the results div that the answer is wrong.
    } else {
        showScore();
    gameoverDiv.setAttribute("class", "visible");
        function generateHighscores() {
            highscoreDisplayName.innerHTML = "";
            highscoreDisplayScore.innerHTML = "";
            var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
            for (i = 0; i < highscores.length; i++) {
                var newNameSpan = document.createElement("li");
                var newScoreSpan = document.createElement("li");
                newNameSpan.textContent = highscores[i].name;
                newScoreSpan.textContent = highscores[i].score;
                highscoreDisplayName.appendChild(newNameSpan);
                highscoreDisplayScore.appendChild(newScoreSpan);
            }
        } 
        generateHighscores()
    }

    }
    
