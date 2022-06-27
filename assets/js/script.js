const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container"); // to make question appea
const questionElement = documnet.getElementById();

let currentQuestionIndex;

startButton.addEventListener('click', startGame);

// Define a function startGame()
function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.remove('hide');
}


// Define a function setNextQuestion()
function setNextQuestion(){

}

// Define a function selectAnswer()
function selectAnswer(){

}

//Define a function viewScore()
function viewScore(){

}

//Define a function countdown()
function countdown(){

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

const backButton = document.getElementById("back");
backButton.addEventListener("click", backToPage)

// Define 
function backToPage(){

}