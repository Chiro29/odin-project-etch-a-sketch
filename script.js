const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

function casualColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return color = `rgb(${red}, ${green}, ${blue})`;
}

function gridSquare(a) {
  
}
 
btn.addEventListener("click", () => {
  const squaresToRemove = document.querySelectorAll(".grid");
  let n = 0;
  
  do {
    n = prompt("Choose a number between 1 to 100");
    n = parseInt(n);
  } while (isNaN(n) || n < 1 || n > 100);

  if (squaresToRemove.length > 0) {
    squaresToRemove.forEach(square => container.removeChild(square));
  }

  let l = container.offsetWidth / n;

  for (let i = 1; i < (n * n + 1); i++) {
    const square = document.createElement("div");  
    square.classList.add("grid");
    square.style.width = l + "px";
    square.style.height = l + "px";
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = casualColor();
    });
  }
});