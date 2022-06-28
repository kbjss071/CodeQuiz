const startButton = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container"); 
const questionElement = documnet.querySelector("#question");
const start = document.querySelector("#start")

let currentQuestionIndex;

// startButton.addEventListener('click', function(){
//     start.classList.add('hide');
//     questionContainerElement.remove('hide');
//     startGame();
// });

// Define a function startGame()
function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    countdown();
    buildQuiz();

}


// Define a function buildQuiz()
function buildQuiz(questions, i){
    document.querySelector('#question').textContent(questions[i].question);
    document.querySelector('#option1').textContent(questions[i].answers[0].text);
    document.querySelector('#option2').textContent(questions[i].answers[1].text);
    document.querySelector('#option3').textContent(questions[i].answers[2].text);
    document.querySelector('#option4').textContent(questions[i].answers[3].text);

}

// Define a function selectAnswer()
function selected_answer(){
    for (var i = 0; i < 4; i++){
        var a = document.getElementById("options").children;
        if (a[i].innte)
    }
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

const questions = [
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
]

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
})


//Under this line, the codes are for highestScore.html.

const backButton = document.getElementById("back");
backButton.addEventListener("click", backToPage)

// Define a function backToPage()
function backToPage(){
    location.href="index.html";
}