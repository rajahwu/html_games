let inputDirecton = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keypress', e => {
    switch (e.key) {
        //? Move Up
        case 'w':
            if(lastInputDirection.y !== 0) break
            inputDirecton = { x: 0, y: -1 }
            break
        case '8':
            if(lastInputDirection.y !== 0) break
            inputDirecton = { x: 0, y: -1 }
            break
        //? Move Down
        case 's':
            if(lastInputDirection.y !== 0) break
            inputDirecton = { x: 0, y: 1 }
            break
        case '2':
            if(lastInputDirection.y !== 0) break
            inputDirecton = { x: 0, y: 1 }
            break
        //? Move Left
        case 'a':
            if(lastInputDirection.x !== 0) break
            inputDirecton = { x: -1, y: 0 }
            break
        case '4':
            if(lastInputDirection.x !== 0) break
            inputDirecton = { x: -1, y: 0 }
            break
        //? Move Right
        case 'd':
            if(lastInputDirection.x !== 0) break
            inputDirecton = { x: 1, y: 0 }
            break
        case '6':
            if(lastInputDirection.x !== 0) break
            inputDirecton = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirecton
    return inputDirecton
}