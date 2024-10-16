// function sketch() {
//   const column = Array(16)
//     .fill()
//     .map((e) => []);

//   for (i = 0; i < 16; i++) {
//     column[i].concat(row(document.createElement("div")));
//   }

//   return column;

//   function row(square) {
//     return Array(16)
//       .fill()
//       .map((x) => [square]);
//   }
// }

const container = document.querySelector(".container");
for (let i = 1; i < 16 * 16; i++) {
  const square = document.createElement("div");
  container.appendChild(square);
}

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
