window.onload = canvasApp;


function canvasSupport(): boolean {
    return !!document.createElement('canvas').getContext;
}

function canvasApp(): void {
    if (!canvasSupport) throw new Error('HTML5 Canvas is not supported by your browser');
    const canvasOne = <HTMLCanvasElement>document.getElementById('canvas_one');
    const ctx = <CanvasRenderingContext2D>canvasOne.getContext('2d');
    if (!ctx) throw new Error('Canvas must have rendering Conxtext');

    const today = new Date;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const message = "Guess The Letter From a (lower) to z (higher)";
    const lettersGussed: string[] = [];
    let letterToGuess: string;
    let guesses: number;
    let higherOrLower: "That is not a letter" | "Higher" | "Lower";
    let guessIndex: number;
    let letterIndex: number;
    let gameOver = false;
    initGame();

    function initGame(): void {
        const formElement = document.getElementById('createImageData');
        formElement?.addEventListener('click', createImageDataPressed, false);
        letterToGuess = letters[Math.floor(Math.random() * letters.length)];
        guesses = 0;
        window.addEventListener('keypress', eventKeyPressed, true);
        drawScreen();
    }

    function eventKeyPressed(e: KeyboardEvent): void {
        if (!gameOver) {
            const letterPressed = e.key.toLowerCase();
            guesses++;
            lettersGussed.push(letterPressed);
            checkGuessedLetter();

            function checkGuessedLetter(): void {
                if (letterPressed === letterToGuess) {
                    gameOver = true;
                    window.removeEventListener('keypress', eventKeyPressed);
                } else {
                    letterIndex = letters.indexOf(letterToGuess);
                    guessIndex = letters.indexOf(letterPressed);
                }
                if (guessIndex < 0) {
                    higherOrLower = "That is not a letter";
                } else if (guessIndex > letterIndex) {
                    higherOrLower = "Lower";
                } else {
                    higherOrLower = "Higher";
                }
            }
        }
        drawScreen();
    }

    function createImageDataPressed() {
        window.open(canvasOne.toDataURL(), 'canvasImage', 'left=0,top=0,width=' + canvasOne.width + ', height=' + canvasOne.height + ', toobar=0,resizable=0')
    }

    function drawScreen(): void {
        ctx.fillStyle = "#ffffaa";
        ctx.fillRect(0, 0, 490, 290);

        ctx.strokeStyle = "#000000";
        ctx.strokeRect(5, 5, 490, 290);
        ctx.textBaseline = "top";

        ctx.fillStyle = "#000000";
        ctx.font = "10px Sans-Serif";
        ctx.fillText(today.toLocaleDateString(), 150, 10);

        ctx.fillStyle = "ff0000";
        ctx.font = "14px San-Serif";
        ctx.fillText(message, 125, 30);
        ctx.fillStyle = "#109910;"
        ctx.font = "16px San-Serif";
        ctx.fillText('Guesses: ' + guesses, 215, 50);

        ctx.fillStyle = "#000000";
        ctx.font = "16px Sans-Serif";
        ctx.fillText("Letters Guessed: " + lettersGussed.toString(), 10, 260);

        if (gameOver) {
            ctx.fillStyle = "ff0000";
            ctx.font = "40px Sans-Serif";
            ctx.fillText("You Got It!", 150, 180)
        }
    }
}
