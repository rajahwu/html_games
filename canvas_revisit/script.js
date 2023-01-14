const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.setAttribute('width', '256');
canvas.setAttribute('height', '256');
canvas.style.border = '1px dashed black';
app.appendChild(canvas);
const ctx = canvas.getContext('2d');


// * Drawing Lines
// drawALine();
// drawATriangle();

function drawALine(lineCap){
    // 1. Set the line style options
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    if(lineCap) {
        // "round", "butt", or "square"
        ctx.lineCap = lineCap;
    }
    
    // 2. Draw the line
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(128,128);
    ctx.stroke();
}

function drawATriangle() {
    // Set the line and fill style options
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(128,128,128,0.5'
    // Connect the lines together 
    ctx.beginPath();
    ctx.moveTo(128,85);
    ctx.lineTo(170,170);
    ctx.lineTo(85,170);
    ctx.lineTo(128,85);
    ctx.fill();
    ctx.stroke();
}

// * Drawing Complex Shapes

const triangle = [
    [128,85],
    [170,170],
    [85,170]
];

// ctx.beginPath();
// drawPath(triangle);
// ctx.stroke();
// ctx.fill();

function drawPath(shape) {
    // Start drawing shape from the last point
    const lastPoint = shape.length - 1;
    ctx.moveTo(
        shape[lastPoint][0],
        shape[lastPoint][1]
    );

    // Use a loop to plot each point
    shape.forEach(point => {
        ctx.lineTo(point[0], point[1])
    });
}

// * Drawing Squares and Rectangles
// rect(x, y, width, height)

// drawARectangle();
// drawARectangleWithShortCut();

function drawARectangle() {
    // Set the line and fill style options
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(128,128,128,0.5)';

    // Draw the rectangle
    ctx.beginPath();
    ctx.rect(50,40,70,90);
    ctx.stroke();
    ctx.fill();
}

function drawARectangleWithShortCut() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(128,128,128,0.5)';
    ctx.strokeRect(110,170,100,50);
    ctx.fillRect(110,170,100,50);
}

// * Gradients

// ? Create a linear Gradient
const linearGradient = ctx.createLinearGradient(64,64,192,192);
// ? Create a radial gradient
//  const radialGradient = ctx.createRadialGradient(x, y, startCircleSize, x, y, endCircleSize);
const radialGradient = ctx.createRadialGradient(128,128,10,128,128,96);

// Draw a shape with gradient
// drawASquareWithGradient(radialGradient);

//  Define the line on the canvas the gradient show follow
//  const LinearGradient = ctx.createLinearGradient(startX,startY, endX, endY)
// Add color stops
// linearGradient.addColorStop(start 0 || end 1, "color") 
//  Apply to context's fillStyle
// ctx.fillStyle = linerarGradient

function drawASquareWithGradient(gradient) {
// Set the line style options
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;

gradient.addColorStop(0, 'white');
gradient.addColorStop(1,'black');
ctx.fillStyle = gradient;

// Draw the shape
ctx.beginPath();
ctx.rect(64,64,128,128);
ctx.stroke();
ctx.fill();
}

// * Drawing Circles and Arcs
// arc(centerX, circleRadius, startAngle, endAngle, false)

// TODO Radians to degress formulas
// ? radians = degrees * (Math.PI / 180)
// ? degrees = radians * (180 / Math.PI)

// drawACircle();
// drawAnArc();

function drawACircle() {
    // Set the line style options
    ctx.strokeStyle - 'black';
    ctx.lineWidth = 3;

    // Create a radial gradient
    const gradient = ctx.createRadialGradient(96,96,12,128,128,96);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;

    // Draw the cirlce
    ctx.beginPath();
    ctx.arc(128,128,64,0,2*Math.PI,false)
    ctx.stroke();
    ctx.fill();
}

function drawAnArc() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth - 3;
    ctx.beginPath();
    ctx.arc(128,128,64,3.14,5,false);
    ctx.stroke();
}

// * Drawing Curved Lines
