window.onload = canvasApp;
function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}
function canvasApp() {
    if (!canvasSupport)
        return;
    var canvasOne = document.getElementById('canvas_one');
    var ctx = canvasOne.getContext('2d');
    if (!ctx)
        return;
    drawScreen();
    function drawScreen() {
        // background
        ctx.fillStyle = '#ffffaa';
        ctx.fillRect(0, 0, 500, 300);
        // text
        ctx.fillStyle = '#000000';
        ctx.font = '20px Sans-Serif';
        ctx.textBaseline = 'top';
        ctx.fillText("Hello World!", 195, 80);
        // image
        var helloWorldImage = new Image();
        helloWorldImage.onload = function () { return ctx.drawImage(helloWorldImage, 155, 110); };
        helloWorldImage.src = './turtle.jpg';
        // box
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(5, 5, 490, 290);
    }
}
