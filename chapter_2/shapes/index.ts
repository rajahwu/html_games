window.onload = canvasApp;

function canvasSupport(): boolean {
    return !!document.createElement('canvas').getContext;
}

function canvasApp(): void {
    if (!canvasSupport()) throw new Error('HTML5 Canvas is not supported by your browser');
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')
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
        // // draw a big box on the screen
        // ctx.fillStyle = 'black';
        // ctx.fillRect(10, 10, 200, 200);
        // ctx.save();
        // ctx.beginPath()  // clip the canvas to a 50x50 square starting a 0,0
        // ctx.rect(0, 0, 50, 50);
        // ctx.clip()

        // // red circle
        // ctx.beginPath()
        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 5;
        // ctx.arc(100, 100, 100, (Math.PI / 100) * 0, (Math.PI / 100) * 360, false);
        // //full circle
        // ctx.stroke();
        // ctx.closePath();

        // ctx.restore();

        // // reclip to the entire canvas
        // ctx.beginPath();
        // ctx.rect(0, 0, 500, 500);
        // ctx.clip();

        // // draw a blue line that is not clipped
        // ctx.beginPath();
        // ctx.strokeStyle = 'blue';
        // ctx.lineWidth = 5;
        // ctx.arc(100, 100, 50, (Math.PI / 100) * 0, (Math.PI / 100) * 360, false);
        // //full circle
        // ctx.stroke();
        // ctx.closePath();

        //* Canvas Composition
        // // draw a big box on the screen
        // ctx.fillStyle = 'black';
        // ctx.fillRect(10, 10, 200, 200);

        // // leave globalCompositeOperation as is
        // //  now draw a red square
        // ctx.fillStyle = 'red';
        // ctx.fillRect(1, 1, 50, 50)

        // // now set the sourc-over
        // ctx.globalCompositeOperation = 'source-over'
        // // draw a red square next to the other one
        // ctx.fillRect(60, 1, 50, 50)   // now set to destination-atop
        // ctx.globalCompositeOperation = 'destination-atop';
        // ctx.fillRect(1, 60, 50, 50)

        // // now set global alpha
        // ctx.globalAlpha = 0.5;

        // // now set to source atop
        // ctx.globalCompositeOperation = 'source-atop'
        // ctx.fillRect(60, 60, 50, 50);

        //* Rotation and Translation Transformations        
        // ctx.fillStyle = 'black';
        // ctx.fillRect(20, 20, 25, 25)

        // ctx.setTransform(1, 0, 0, 1, 0, 0);
        // const angleInRadians = 45 * Math.PI / 100;
        // let x = 100;
        // let y = 100;
        // let width = 50;
        // let height = 50;
        // ctx.translate(x+0.5*width, y+0.5*height);
        // ctx.rotate(angleInRadians);
        // ctx.fillStyle = 'red';
        // ctx.fillRect(-0.5*width, -0.5*height, width, height);

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const angleInRadians = 90 * Math.PI / 180;
        let x = 100;
        let y = 100;
        let width = 100;
        let height = 50;
        ctx.translate(x+0.5*width, y+0.5*height);
        ctx.scale(2, 2);
        ctx.rotate(angleInRadians);
        ctx.fillStyle = 'red';
        ctx.fillRect(-0.5*width, -0.5*height, width, height);
    }
}
