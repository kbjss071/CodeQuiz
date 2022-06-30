const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");

// Define a function backToPage()
function backToPage(){
    location.href="index.html";
}

const grid = document.querySelector(".score-grid");

// Clear history once the reset button is clicked
resetButton.addEventListener("click", function(){
    while (grid.children[0].children){
        grid.removeChild(grid.children[0])
    }
})