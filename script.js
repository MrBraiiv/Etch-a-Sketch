function createGrid(numOfSquaresPerSide) {
  let squareSize = 896 / numOfSquaresPerSide;
  let container = document.querySelector(".container");
  for (let i = 0; i < numOfSquaresPerSide ** 2; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
  }
  const allSquares = document.querySelectorAll(".container > *");
  allSquares.forEach(
    (square) =>
      (square.style.cssText = `width: ${squareSize}px; flex-grow: 1; flex-shrink: 0; height: ${squareSize}px;`)
  );

  const resetGrid = document.createElement("button");
  resetGrid.classList.add("resetGrid");
  resetGrid.textContent = "Reset";
  document.body.appendChild(resetGrid);
  resetGrid.addEventListener("click", () => {
    container.textContent = "";
    setTimeout(() => {
      for (let j = 0; j < Infinity; j++) {
        let num = parseInt(
          prompt("How many x*x do you want your grid? enter x:", 16)
        );
        if (num <= 100 && num > 1) {
          createGrid(num);
          break;
        } else if (num > 100) {
          alert("x is not valid, try values that are less than 100");
          continue;
        } else if (num < 0) {
          alert("x is not valid, negative values doesn't work");
          continue;
        }
      }
      document.body.removeChild(resetGrid);
    }, 500);
  });

  //Change color
  container.addEventListener("mousemove", (e) => {
    if (e.target !== container) {
      e.target.classList.add("fired-square");
    }
  });

  //Mouse trail
  container.addEventListener("mousemove", (e) => {
    if (e.target !== container) {
      const x = e.pageX;
      const y = e.pageY;
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${x - 10 + "px"}`;
      dot.style.top = `${y - 10 + "px"}`;
      setTimeout(() => {
        container.appendChild(dot);
      }, 50);
    }
  });
}

createGrid(16);
