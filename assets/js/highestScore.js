const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");
const scoreGrid = document.getElementsByClassName("score-grid");

// Display user's score
renderScore();

// Define a function backToPage()
function backToPage(){
    location.href="index.html";
}

const grid = document.querySelector(".score-grid");
const scoreList = document.querySelector("#score-list");
// Clear history once the reset button is clicked
resetButton.addEventListener("click", function(){
    grid.removeChild(scoreList);

    clearLocalStorage();
})

function clearLocalStorage(){
    localStorage.clear();
}


function renderScore(){
    for (var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== null && localStorage.key(i) !== "randid"){
            var newScore = document.createElement('li');
            newScore.textContent = localStorage.key(i) + " - " + localStorage.getItem(localStorage.key(i));
            document.querySelector("#score-list").append(newScore);
            console.log(document.querySelector("#score-list"));
        }
    }
}