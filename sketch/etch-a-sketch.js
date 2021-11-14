const MOVE_AMOUNT = 10;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

//for smooth draw, by default it will  square line, we are making it round;
ctx.lineCap = "round";
ctx.lineJoin = "round";

// 10px thick lines
ctx.lineWidth = 30;

//start drawing
ctx.beginPath();
// place the dot 200 pixels from the left and 200 pixels from the top.
ctx.moveTo(x, y);

ctx.lineTo(x, y);
//ctx.stroke(); will draw a line between where you started and where you drew your line to.
ctx.stroke();

const draw = ({ keyCode }) => {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  switch (keyCode) {
    case 37:
      console.log("Left Key");
      x -= MOVE_AMOUNT;
      break;
    case 38:
      y -= MOVE_AMOUNT;
      console.log("Up Key");
      break;
    case 39:
      x += MOVE_AMOUNT;
      console.log("Right Key");
      break;
    case 40:
      y += MOVE_AMOUNT;
      console.log("Down Key");
      break;
    default:
      break;
  }
  ctx.beginPath();
  ctx.lineTo(x, y);
  ctx.stroke();
};

const handleKey = (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ keyCode: e.keyCode });
  }
};
function clearCanvas() {
  canvas.classList.add("shake");
  //clear the canvas
  ctx.clearRect(0, 0, width, height);
  //when animation ends, remove the shake class from it so that it will be animated again.
  canvas.addEventListener(
    "animationend",
    function () {
      console.log("done the shake!");
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
window.addEventListener("keydown", handleKey);

shakeButton.addEventListener("click", clearCanvas);
