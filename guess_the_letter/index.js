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
    var guesses;
    var message = "Guess The Letter From a (lower) to z (higher)";
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var today = new Date;
    var letterToGuess = "";
    var lettersGussed = [];
    var letterIndex;
    var guessIndex;
    var gameOver = false;
    var higherOrLower;
    function initGame() {
        letterIndex = Math.floor(Math.random() * letters.length);
        letterToGuess = letters[letterIndex];
        guesses = 0;
        window.addEventListener('keypress', eventKeyPressed, true);
        drawScreen();
    }
    function eventKeyPressed(e) {
        if (!gameOver) {
            var letterPressed = e.key
                .toLocaleLowerCase();
            guesses++;
            lettersGussed.push(letterPressed);
            if (letterPressed === letterToGuess) {
                gameOver = true;
            }
            else {
                letterIndex = letters.indexOf(letterToGuess);
                guessIndex = letters.indexOf(letterPressed);
            }
            if (guessIndex < 0) {
                higherOrLower = "That is not a letter";
            }
            else if (guessIndex > letterIndex) {
                higherOrLower = "Lower";
            }
            else {
                higherOrLower = "Higher";
            }
            drawScreen();
        }
    }
    if (!canvasSupport)
        return;
    var canvasOne = document.getElementById('canvas_one');
    var ctx = canvasOne.getContext('2d');
    if (!ctx)
        return;
    initGame();
    /**
     *  Draw on canvas
     */
    function drawScreen() {
        return;
    }
}
