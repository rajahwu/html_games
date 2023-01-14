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
// ctx.quadraticCurveTo(controlX, controlY, endX, endY)
// ctx.bezierCurveTo(control1X, control1Y, control2X,, contral3Y, endX, endY)

// * Shadow
function addShadow() {
    ctx.shadowColor = 'rgba(128,128,128,0.9)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
}

// * Rotation
// rotateShape();

function rotateShape() {
    // Set the line and fill style options
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(128,128,128,0.5';

    // Save the current state of the drawing context before it's rotated
    ctx.save();

    // Shift the drawing context's 0,0 point from the canvas's top left
    // conrner to the center of the canvas. This will be the 
    // square's center pint
    ctx.translate(128,128);

    // Rotate the drawing context's coordinate system 0.5 radians
    ctx.rotate(0.5);

    // Draw the square from -64 x and -64 y. That will mean its center
    // point will be at exactly 0, which is also the center of the
    // context's coordinate system
    ctx.beginPath();
    ctx.rect(-64,-64,128,128);
    ctx.stroke();
    ctx.fill();

    // Restore the drawing context to
    // its original position and rotation
    ctx.restore();
}

// * Scale
// values between 0 and 1 || 0% to 100%
// 2 = 200%
// ctx.scale(scaleX, scaleY) 

// * Making Things Transparent
// ctx.globalAlpha = alpha value (valule between 0 and 1) 
// drawTransparentShapes();

function drawTransparentShapes() {
    // Set the fill style options
    ctx.fillStyle = 'black';
    
    // Draw the rectangel
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0.6;
    ctx.rect(32,32,128,128);
    ctx.fill();
    ctx.restore();

    // Draw the circle
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0.3;
    ctx.arc(160,160,64,0,2*Math.PI,false);
    ctx.fill();
    ctx.restore();
}

// * Using Blend Modes
// createBlendedEffect("multiply");

function createBlendedEffect(effect) {
    // Set the blend mode
    ctx.globalCompositeOperation = effect;

    // Draw the rectangle
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(32,32,128,128);
    ctx.fill();
    ctx.restore();

    // Draw the circle
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(160,160,64,0,2*Math.PI,false);
    ctx.fill();
    ctx.restore();
}

// * Compositing Effect
// ctx.globalCompositeOperation = Porter-Duff operations

// ? Porter-Duff Operations
// "source-over" Draws the first shape in front of the second shape.
// "destination-over" Draws the second shape in front of the first shape.
// "source-in" Draws the second shape only on the section of the canvas 
// where the two shapes overlap.
// "destination-in" Draws the first shape only on the section of the canvas 
// where the two shapes overlap.
// "source-out" Draws the second shape where it doesn’t overlap the first shape.
// "destination-out" Draws the first shape where it doesn’t overlap the second shape.
// "source-atop" Draws the second shape only where it overlaps the first shape.
// "destination-atop" Draws the first shape only where it overlaps the second shape.
// "lighter" Blends the overlapping shape colors together into a lighter shade.
// "darker" Blends the overlapping shape colors together into a darker shade.
// "xor" Makes the overlapping region transparent.
// “copy” Draws only the second shape

// * Filling Shapes with Images
fillShapeWithImage();

function fillShapeWithImage() {
    // Load an image
    let catImage = new Image();
    catImage.src = './src/cat.png';
    catImage.onload = () => {

        // Set the line style options
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
    
        // Draw the rectangle
        ctx.beginPath();
        ctx.rect(64,64,128,128);
    
        // Set the pattern to the image, and the fillStyle to the pattern
        const pattern = ctx.createPattern(catImage, 'no-repeat');
        ctx.fillStyle = pattern;
    
        // Offset the canvas to match the rectangle's x and y position,
        // the start the image fill from that point
        ctx.save();
        ctx.translate(64,64);
        ctx.stroke();
        ctx.restore();
    }
}