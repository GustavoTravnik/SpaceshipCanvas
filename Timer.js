export class Timer {
    delay = 0;
    currentDelay = 0;

    constructor(delay, currentDelay) {
        this.delay = delay;
        this.currentDelay = currentDelay;
    }
    
    proccessTimer(action) {
        this.currentDelay++;
        if (this.currentDelay >= this.delay) {
            this.currentDelay = 0;
            action();
        }
    }
}