var stage = document.getElementById("stage");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.setAttribute("width", "256");
canvas.setAttribute("height", "256");
stage === null || stage === void 0 ? void 0 : stage.appendChild(canvas);
canvas.classList.add("canvas");
lineStroke({
    fillStyle: "#ff0000",
    strokeStyle: "#0000ff",
    lineWidth: 5
});
ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(10, 10, 100, 100);
ctx === null || ctx === void 0 ? void 0 : ctx.strokeRect(20, 20, 100, 100);
function lineStroke(config) {
    if (!ctx)
        throw new Error('Canvas must have context to establish a line stroke.');
    ctx.fillStyle = config.fillStyle;
    ctx.strokeStyle = config.strokeStyle;
    ctx.lineWidth = config.lineWidth;
}
