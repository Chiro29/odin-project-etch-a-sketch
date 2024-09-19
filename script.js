const container = document.querySelector(".container");

function casualColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return color = `rgb(${red}, ${green}, ${blue})`;
}

let l = container.offsetWidth / 16;

for (let i = 1; i < 16 ** 2 + 1; i++) {
  const square = document.createElement("div");  
  square.classList.add("grid");
  square.style.width = l + "px";
  square.style.height = l + "px";
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = casualColor();
  });
}

