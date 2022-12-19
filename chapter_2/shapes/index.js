window.onload = canvasApp;
function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}
function canvasApp() {
    if (!canvasSupport())
        throw new Error('HTML5 Canvas is not supported by your browser');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    drawScreen();
    function drawScreen() {
        //* Draw Rec
        // ctx.fillStyle = '#000000';
        // ctx.strokeStyle = 'ff00ff';
        // ctx.lineWidth = 2;
        // ctx.fillRect(10,10,40,40);
        // ctx.strokeRect(0,0,60,60);
        // ctx.clearRect(20,20,20,20,);
        //* Draw line path
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 10;
        // ctx.lineCap = 'square';
        // ctx.beginPath();
        // ctx.moveTo(20,0);
        // ctx.lineTo(100,0);
        // ctx.stroke();
        // ctx.closePath();    
        //* Sample 1: round end, bevel join, at top left of canvas
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 10;
        // ctx.lineJoin = 'bevel';
        // ctx.lineCap = 'round';
        // ctx.beginPath();
        // ctx.moveTo(0,0);
        // ctx.lineTo(25, 0);
        // ctx.lineTo(25,25);
        // ctx.stroke()
        // ctx.closePath()
        //* Sample 2: round end, bevel join, not at to or left of canvas
        // ctx.beginPath();
        // ctx.moveTo(10,50);
        // ctx.lineTo(35,50);
        // ctx.lineTo(35,75);
        // ctx.stroke();
        // ctx.closePath();
        //* Sample #: flat end, round join, not at top or left of canvas
        // ctx.lineJoin = 'round';
        // ctx.lineCap = 'butt';
        // ctx.beginPath();
        // ctx.moveTo(10,100);
        // ctx.lineTo(35,100);
        // ctx.lineTo(35,125);
        // ctx.stroke();
        // ctx.closePath()
        //* Arcs
        // ctx.beginPath();
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 5;
        // ctx.arc(100, 100, 20, (Math.PI / 100) * 0, (Math.PI / 180) * 360, false);
        // ctx.stroke();
        // ctx.closePath();
        //* Clipping Regions
        // draw a big box on the screen
        ctx.fillStyle = 'black';
        ctx.fillRect(10, 10, 200, 200);
        ctx.save();
        ctx.beginPath(); // clip the canvas to a 50x50 square starting a 0,0
        ctx.rect(0, 0, 50, 50);
        ctx.clip();
        // red circle
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.arc(100, 100, 100, (Math.PI / 100) * 0, (Math.PI / 100) * 360, false);
        //full circle
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        // reclip to the entire canvas
        ctx.beginPath();
        ctx.rect(0, 0, 500, 500);
        ctx.clip();
        // draw a blue line that is not clipped
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;
        ctx.arc(100, 100, 50, (Math.PI / 100) * 0, (Math.PI / 100) * 360, false);
        //full circle
        ctx.stroke();
        ctx.closePath();
    }
}
