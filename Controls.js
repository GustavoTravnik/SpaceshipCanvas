export class Controls {
    static UP_PRESSED = false;
    static DOWN_PRESSED = false;
    static LEFT_PRESSED = false;
    static RIGHT_PRESSED = false;
    static SPACE_PRESSED = false;

    static keyDownListener = (key) => {
        switch(key.code) {
            case 'ArrowUp':
                this.UP_PRESSED = true;
                break;
            case 'ArrowDown':
                this.DOWN_PRESSED = true;
                break;
            case 'ArrowLeft':
                this.LEFT_PRESSED = true;
            break;
            case 'ArrowRight':
                this.RIGHT_PRESSED = true;
            break;
            case 'Space':
                this.SPACE_PRESSED = true;
            break;
        }
    }

    static keyUpListener = (key) => {
        switch(key.code) {
            case 'ArrowUp':
                this.UP_PRESSED = false;
                break;
            case 'ArrowDown':
                this.DOWN_PRESSED = false;
                break;
            case 'ArrowLeft':
                this.LEFT_PRESSED = false;
            break;
            case 'ArrowRight':
                this.RIGHT_PRESSED = false;
            break;
            case 'Space':
                this.SPACE_PRESSED = false;
            break;
        }
    }
}