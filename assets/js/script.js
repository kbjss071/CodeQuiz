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
        answer1: 'strings',
        answer2: 'booleans',
        answer3: 'alerts',
        answer4: 'numbers',
        correct: 3
    },
    {
        question: 'The condition in an if/else statement is enclosed within _____',        
        answer1: 'quotes',
        answer2: 'curly brackets',
        answer3: 'parenthesis',
        answer4: 'square brackets',
        correct: 3
    },    
    {
        question: 'Arrays in JavaScript can be used to store _____',
        answer1: 'numbers and strings',
        answer2: 'other arrays',
        answer3: 'booleans',
        answer4: 'all of the above',
        correct: 4
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',        
        answer1: 'commas',
        answer2: 'curly brackets',
        answer3: 'quotes',
        answer4: 'parenthesis',
        correct: 3
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer1: 'JavaScript',
        answer2: 'terminal/bash',
        answer3: 'for loops',
        answer4: 'console.log',
        correct: 4
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
    option1.innerText = currentQuizData.answer1;
    option2.innerText = currentQuizData.answer2;
    option3.innerText = currentQuizData.answer3;
    option4.innerText = currentQuizData.answer4;
}

function resetState(){
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

const options = document.querySelectorAll(".opt-btn");
options.forEach(option => {
    option.addEventListener("click", e => {
        selectAnswer(e);
    })
})

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset["number"];
    const currentCorrectness = quizData[currentQuiz].correct;
    if(selectedButton.dataset["number"] == currentCorrectness){
        setStatusClass(document.getElementById("correctness"), true);
    } else {
        setStatusClass(document.getElementById("correctness"), false);
        countdown().subtractCountDown();
    }

    if (currentQuiz < quizData.length-1){
        currentQuiz++;
        showQuestion();
    } else {
        setInit();
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    console.log(correct);
    if(correct){
        element.textContent = "Correct!";
    } else {
        element.textContent = 'Wrong.';
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

        function subtractCountDown(){
            secondsLeft = secondsLeft - 15;
        }

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
