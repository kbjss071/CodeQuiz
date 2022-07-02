const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");
const scoreGrid = document.getElementsByClassName("score-grid");

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

    console.log(grid);
    console.log(grid.children[0]);
})

function clearLocalStorage(){
    localStorage.clear();
}

function scoreSort(){

}

function displayScore(){
    var li = document.createElement('li');
    li.textContent = localStorage.key + " " + localStorage.value;
    grid.children[0];

    if (grid.children){
        grid.children[0].append(li);
    } else {
        grid.append(document.createElement('ol'));
    }
}