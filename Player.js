import { Point } from './Helper.js';

export class Player {
    texture = new Image();
    position = new Point(400, 300);
    rot = 0;

    constructor() {
        this.texture.src = "assets/player.png";
    }    

    GameLogic() {
        this.position.x += Math.sin(this.rot);
        this.position.y += Math.cos(this.rot);
        this.rot+=0.05;
    }
    
    GameDraw(ctx) {
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    }
}

