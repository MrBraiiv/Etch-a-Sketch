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

const sketch = Array(16 * 16).fill(document.createElement("div"));
const container = document.querySelector(".container");
for (i = 0; i < 16 * 16; i++) {
  container.appendChild(sketch[i]);
}
