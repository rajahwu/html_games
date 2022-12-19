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
    let guesses: number;
    const message = "Guess The Letter From a (lower) to z (higher)";
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const today = new Date;
    let letterToGuess = "";
    const lettersGussed: string[] = [];
    let letterIndex: number;
    let guessIndex: number;
    let gameOver = false;
    let higherOrLower: "That is not a letter" | "Higher" | "Lower";

    function initGame() {
        letterIndex = Math.floor(Math.random() * letters.length);
        letterToGuess = letters[letterIndex];
        guesses = 0;
        window.addEventListener('keypress', eventKeyPressed, true);
        drawScreen()
    }
    
    function eventKeyPressed(e: KeyboardEvent) {
        if(!gameOver) {
            let letterPressed = e.key
            .toLocaleLowerCase()
            guesses++;
            lettersGussed.push(letterPressed);

            if (letterPressed === letterToGuess) {
                gameOver = true;
            } else {
                letterIndex = letters.indexOf(letterToGuess)
                guessIndex = letters.indexOf(letterPressed)
            }
            if (guessIndex < 0) {
                higherOrLower = "That is not a letter";
            } else if (guessIndex > letterIndex) {
                higherOrLower = "Lower";
            } else {
                higherOrLower = "Higher";
            }
            drawScreen();
        }
    }

    if (!canvasSupport) return;
    const canvasOne = <HTMLCanvasElement>document.getElementById('canvas_one');
    const ctx = <CanvasRenderingContext2D>canvasOne.getContext('2d');
    if (!ctx) return;
    initGame();


    /**
     *  Draw on canvas
     */
    function drawScreen(): void {
        return
    }
}
