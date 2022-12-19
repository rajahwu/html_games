window.onload = canvasApp;
/**
 * Check browser support for canvas
 * 
 * @returns boolean
 */
function canvasSupport(): boolean {
    return !!document.createElement('canvas').getContext;
}

/**
 * runs canvas app
 * 
 * @returns void
 */
function canvasApp(): void {
    if (!canvasSupport) return;
    const canvasOne = <HTMLCanvasElement>document.getElementById('canvas_one');
    const ctx = <CanvasRenderingContext2D>canvasOne.getContext('2d');
    if (!ctx) return;
    drawScreen();


    /**
     *  Draw on canvas
     */
    function drawScreen(): void {
        // background
        ctx.fillStyle = '#ffffaa';
        ctx.fillRect(0, 0, 500, 300);
        // text
        ctx.fillStyle = '#000000';
        ctx.font = '20px Sans-Serif';
        ctx.textBaseline = 'top';
        ctx.fillText("Hello World!", 195, 80);
        // image
        const helloWorldImage = <HTMLImageElement>new Image();
        helloWorldImage.onload = () => ctx.drawImage(helloWorldImage, 155, 110);
        helloWorldImage.src = './turtle.jpg';
        // box
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(5, 5, 490, 290);
    }
}
