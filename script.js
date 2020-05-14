const resetButton = document.querySelector(".Reset");
const container = document.querySelector(".container");
const grid = document.querySelector(".grid")


//Create div grid
function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", ()=> {
      cell.style.backgroundColor = 'black';
    });
  container.appendChild(cell).className = "grid";

    resetButton.addEventListener("click", ()=> {
      cell.style.backgroundColor = 'white';
    });
  };
};

createGrid(16, 16);