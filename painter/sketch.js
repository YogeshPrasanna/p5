let global = window;
let brushWidth = 5,
  brushHeight = 5;
let brushColor = "#851934";

const canvasBackColor = "#fff";

//utilities
const createBrushStroke = () => {
  noStroke();
  fill(brushColor);
  ellipse(mouseX, mouseY, brushWidth, brushHeight);
};

const clearCanvas = () => {
  background(canvasBackColor);
};

// instantiation - runs for the first time
function setup() {
  createCanvas(global.innerWidth - 100, global.innerHeight - 100);
  clearCanvas();
}

// Draw loop - runs for every frame
// print 'frameRate' to check for the current frame
function draw() {}

// User Interactive events
function mouseDragged() {
  createBrushStroke();
}

function mouseClicked() {
  createBrushStroke();
}

function onClearClick() {
  clearCanvas();
}

function onBrushSizeChange(event) {
  const size = event.target.value;
  switch (size) {
    case "1":
      (brushWidth = 5), (brushHeight = 5);
      break;
    case "2":
      (brushWidth = 15), (brushHeight = 15);
      break;
    case "3":
      (brushWidth = 30), (brushHeight = 30);
      break;
  }
}

function onBrushColorChangeClick(event) {
  const color = event.target.dataset.value;
  switch (color) {
    case "red":
      brushColor = "#851934";
      break;
    case "green":
      brushColor = "#1F8A70";
      break;
    case "yellow":
      brushColor = "#FFE11A";
      break;
    case "blue":
      brushColor = "#165873";
      break;
  }
}
