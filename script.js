const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  const squaresToRemove = document.querySelectorAll(".grid");
  const numSquares = getNumberOfSquares(); 
  
  if (squaresToRemove.length > 0) {
    squaresToRemove.forEach(square => container.removeChild(square));
  }

  createGrid(numSquares); 
}

function getNumberOfSquares() {
  let n = 0;
  do {
    n = prompt("Choose a number between 1 to 100");
    n = parseInt(n);
  } while (isNaN(n) || n < 1 || n > 100);
  return n;
}

function createGrid(numSquares) {
  const opacityCounts = {}; // Object for storing opacity counters
  let squareId = 0;
  const l = container.offsetWidth / numSquares;

  for (let i = 1; i < (numSquares * numSquares + 1); i++) {
    const square = document.createElement("div");
    square.classList.add("grid");
    square.style.width = l + "px";
    square.style.height = l + "px";
    container.appendChild(square);

    square.id = 'square-' + squareId;
    squareId++;

    square.addEventListener("mouseover", handleSquareHover.bind(null, square, opacityCounts)); // Bind function to maintain context
  }
}

function handleSquareHover(square, opacityCounts) {
  const Id = square.id;
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  if (!opacityCounts[Id]) {
    opacityCounts[Id] = 1;
  }

  let opacity = 0.1 * opacityCounts[Id];
  opacityCounts[Id]++;
  square.dataset.colorCount = opacityCounts[Id];

  if (opacity > 1) {
    opacity = 1;
    square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  } else {
    square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
}