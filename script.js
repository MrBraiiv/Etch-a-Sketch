function createGrid(numOfSquaresPerSide) {
  let sqaureSize = 896 / numOfSquaresPerSide;
  let container = document.querySelector(".container");
  for (let i = 0; i < numOfSquaresPerSide ** 2; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
  }
  const allSquares = document.querySelectorAll(".container > *");
  allSquares.forEach(
    (square) =>
      (square.style.cssText = `flex: 1 1 ${sqaureSize}px; height: ${sqaureSize}px;`)
  );

  const resetGrid = document.createElement("button");
  resetGrid.classList.add("resetGrid");
  resetGrid.textContent = "Reset Grid";
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
        } else {
          alert("x is not valid, try values that are less than 40");
          continue;
        }
      }
      document.body.removeChild(resetGrid);
    }, 500);
  });

  //Change color by hovering
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
