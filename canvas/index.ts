const stage = <HTMLDivElement>document.getElementById("stage");
const canvas = <HTMLCanvasElement>document.createElement("canvas");
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
canvas.setAttribute("width", "256");
canvas.setAttribute("height", "256");
stage?.appendChild(canvas);
canvas.classList.add("canvas");

lineStroke({
    fillStyle: "#ff0000",
    strokeStyle: "#0000ff",
    lineWidth: 5
});

ctx?.fillRect(10, 10, 100, 100);
ctx?.strokeRect(20, 20, 100, 100);

interface StrokeConfig {
    fillStyle: string
    strokeStyle: string
    lineWidth: number
}

function lineStroke(config: StrokeConfig): void {
    if (!ctx) throw new Error('Canvas must have context to establish a line stroke.');
    ctx.fillStyle = config.fillStyle;
    ctx.strokeStyle = config.strokeStyle;
    ctx.lineWidth = config.lineWidth;
}