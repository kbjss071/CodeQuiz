const startButton = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container"); 
const questionElement = document.getElementById("question");
const start = document.querySelector("#start");
const answerButton = document.getElementById("options");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const timer = document.getElementById("time");
const score = document.getElementById("score");

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

// Get a question from the object quizData and display the question
function showQuestion(){
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    option1.innerText = "1. " + currentQuizData.answer1;
    option2.innerText = "2. " + currentQuizData.answer2;
    option3.innerText = "3. " + currentQuizData.answer3;
    option4.innerText = "4. " + currentQuizData.answer4;
}

// Whenever every answer button is clicked, the function selectAnswer will be triggered
const options = document.querySelectorAll(".opt-btn");
options.forEach(option => {
    option.addEventListener("click", e => {
        selectAnswer(e);
    })
})

// Define a function to check if user chooses right answer
// Define a function to set next question once the button is clicked
// If there is no available question, the page will move to initial submission page.
function selectAnswer(e){
    const selectedButton = e.target;
    const currentCorrectness = quizData[currentQuiz].correct;
    if(selectedButton.dataset["number"] == currentCorrectness){
        setStatusClass(document.getElementById("correctness"), true);
    } else {
        setStatusClass(document.getElementById("correctness"), false);        
        reduceTimer();
    }

    if (currentQuiz < quizData.length-1){
        currentQuiz++;
        showQuestion();
    } else {
        setInit();
        clearInterval(timerInterval);
        timer.textContent = "Time: ";
    }
}

function reduceTimer(){
    secondsLeft -= 15;
}

// Define a function to display if user chooses a right answer
function setStatusClass(element, correct){
    // clearStatusClass(element);
    console.log(correct);
    if(correct){
        element.textContent = "Correct!";
    } else {
        element.textContent = 'Wrong.';
    }
}


//Define a function countdown()
var secondsLeft = 100;
var timerInterval;
function countdown(){
        timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            setInit();
        }
    }, 1000);
}


// Define a function to set the page to prompt user to enter their initials
const initialEl = document.querySelector(".submit-initial");
function setInit(){
    questionContainerElement.classList.add('hide');
    initialEl.classList.remove("hide");
    score.textContent = "Your score: " + secondsLeft;
}

// Following is for the case where initial is submitted.
var initForm = document.querySelector("#init-form");
var initInput = document.querySelector("#init");

function storeInit(initialText){
    localStorage.setItem(initialText, JSON.stringify(secondsLeft));

}

initForm.addEventListener("submit", function(event){
    event.preventDefault();

    var initialText = initInput.value.trim();

    storeInit(initialText);

    highestScore();
});

function highestScore(){
    window.location.href = "./highestScore.html";
}

function renderScore(){
    for (var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== null && localStorage.key(i) !== "randid"){
            var newScore = document.createElement('li');
            newScore.textContent = localStorage.key(i) + " - " + localStorage.value(i);
            document.querySelector("#score-list").append(newScore);
            console.log(document.querySelector("#score-list"));
        }
    }
}