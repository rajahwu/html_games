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
        ctx.fillStyle = 'aaaaaa';
        ctx.fillRect(0, 0, 200, 200);
        ctx.fillStyle = '#000000';
        ctx.font = '20px _sans';
        ctx.textBaseline = 'top';
        ctx.fillText("Canvas", 0, 0);
    }
}
