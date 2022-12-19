



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

    const text = "Hello World";
    const helloWordlImage = new Image();
    helloWordlImage.src = './helloworld.jpg';
    let alpha = 0;
    let fadeIn = true;
    gameLoop();


    function gameLoop(): void {
        window.setTimeout(gameLoop, 20);
        drawScreen();
    }

    function drawScreen(): void {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 640, 480);
        ctx.globalAlpha = .25;
        ctx.drawImage(helloWordlImage, 10, 0)

        if (fadeIn) {
            alpha += 0.01;
            if (alpha >= 1) {
                alpha = 1;
                fadeIn = false
            }
        } else {
            alpha -= 0.01;
            if (alpha <= 0) {
                alpha = 0;
                fadeIn = true;
            }
        }
        ctx.globalAlpha = alpha;
        ctx.font = '72px Sans-Serif';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, 50, 100)

    }
}
