const startButton = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container"); 
const questionElement = document.getElementById("question");
const start = document.querySelector("#start");
const answerButton = document.getElementById("options");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const quizData = [
    {
        question: 'Commonly used data types DO Not Include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within _____',        
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parenthesis', correct: true},
            {text: 'square brackets', correct: false}
        ]
    },    
    {
        question: 'Arrays in JavaScript can be used to store _____',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',        
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true}
        ]
    }
];

let currentQuiz = 0;

startButton.addEventListener("click", function(){
    start.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    startGame();
});


// Define a function startGame()
function startGame() {
    showQuestion();
    countdown();
}


function showQuestion(){
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.answers[0].text;
    option2.innerText = currentQuizData.answers[1].text;
    option3.innerText = currentQuizData.answers[2].text;
    option4.innerText = currentQuizData.answers[3].text;
}

function resetState(){
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Define a function viewScore()
function viewScore(){

}

//Define a function countdown()
const timer = document.getElementById("time");
function countdown(){
    var secondsLeft = 100;
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;


        if (secondsLeft === 0){
            clearInterval(timerInterval);
            viewScore();
        }
    }, 1000);
}



// Following is for the case where initial is submitted.
var initArr = [];

function storeInit(){
    localStorage.setItem("init", JSON.stringify(initArr))
}

var initForm = document.querySelector("#init-form");
var initInput = document.querySelector("#init");

initForm.addEventListener("submit", function(event){
    event.preventDefault();

    var initialText = initInput.value.trim();

    initArr.push(initialText);
    initInput.value = "";

    storeInit();
});


//Under this line, the codes are for highestScore.html.

const backButton = document.getElementById("back");

// Define a function backToPage()
function backToPage(){
    location.href="index.html";
}

function clearScores(){
    document.querySelector(".score-grid");

}