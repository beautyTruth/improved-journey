// const body = document.body;
// const switchBtn = document.querySelector(".switch");
// const switchPara = document.querySelector(".color");

// switchBtn.addEventListener("click", function () {
//   let color1 = getRandomNum(); //red
//   let color2 = getRandomNum(); //green
//   let color3 = getRandomNum(); //blue

// console.log(color1, color2, color3);

// const colorString = `rgb(${color1}, ${color2}, ${color3})`;
// console.log(colorString);

//   body.style.backgroundColor = colorString;
//   switchPara.innerText = colorString;
// });

// function getRandomNum() {
//   return Math.floor(Math.random() * 256);
// }

// console.log(Math.floor(Math.random() * 256));

/*
my code
*/

const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

switchBtn.addEventListener("click", () => {
  let color1 = getRandomNum(); // R
  let color2 = getRandomNum(); // G
  let color3 = getRandomNum(); // B

  const colorString = `rgb(${color1}, ${color2}, ${color3})`;
  // console.log(colorString);

  body.style.backgroundColor = colorString;
  switchPara.innerText = colorString;
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
