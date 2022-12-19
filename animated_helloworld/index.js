window.onload = canvasApp;
/**
 * Check browser support for canvas
 *
 * @returns boolean
 */
function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}
/**
 * runs canvas app
 *
 * @returns void
 */
function canvasApp() {
    if (!canvasSupport)
        return;
    var canvasOne = document.getElementById('canvas_one');
    var ctx = canvasOne.getContext('2d');
    if (!ctx)
        return;
    var text = "Hello World";
    var helloWordlImage = new Image();
    helloWordlImage.src = './helloworld.jpg';
    var alpha = 0;
    var fadeIn = true;
    gameLoop();
    function gameLoop() {
        window.setTimeout(gameLoop, 20);
        drawScreen();
    }
    function drawScreen() {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 640, 480);
        ctx.globalAlpha = .25;
        ctx.drawImage(helloWordlImage, 10, 0);
        if (fadeIn) {
            alpha += 0.01;
            if (alpha >= 1) {
                alpha = 1;
                fadeIn = false;
            }
        }
        else {
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
        ctx.fillText(text, 50, 100);
    }
}
