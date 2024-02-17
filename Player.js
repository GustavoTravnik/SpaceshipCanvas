import { Point, Rectangle, Size, gameResolutionSize } from './Helper.js';
import { Controls } from './Controls.js';
import { Bullet } from './Bullet.js';
import { Timer } from './Timer.js';

export class Player {
    texture = new Image();
    bulletTexture = new Image();
    position = new Point(400, 300);
    speed = 4;
    static BULLETS = [];
    bulletTimer = new Timer();

    constructor() {
        this.texture.src = "assets/player.png";   
        this.bulletTexture.src = "assets/bullet1.png";    
        this.BULLETS = [];  
        this.bulletTimer = new Timer(8, 0);
    }  
    
    applyBoundaries() {
        const currentRectangle = Rectangle.getRectangleByPointAndTexture(this.position, this.texture);

        if (currentRectangle.right() > gameResolutionSize.width) {
            this.position.x = gameResolutionSize.width - currentRectangle.size.width;
        }

        if (currentRectangle.point.x < 0) {
            this.position.x = 0;
        }

        if (currentRectangle.point.y < 0) {
            this.position.y = 0;
        }

        if (currentRectangle.bottom() > gameResolutionSize.height) {
            this.position.y = gameResolutionSize.height - currentRectangle.size.height;
        }
    }

    applyControls() {
        if (Controls.UP_PRESSED) {
            this.position.y -= this.speed;
        }
        if (Controls.DOWN_PRESSED) {
            this.position.y += this.speed;
        }
        if (Controls.LEFT_PRESSED) {
            this.position.x -= this.speed;
        }
        if (Controls.RIGHT_PRESSED) {
            this.position.x += this.speed;
        }
        if (Controls.SPACE_PRESSED) {
            this.createShoot();
        }
    }

    createShoot() {
        this.bulletTimer.proccessTimer(() => {
            this.BULLETS.push(new Bullet(this.bulletTexture, new Point(this.position.x + 11, this.position.y + 4), new Point(0, -18)));
        });
    }

    GameLogic() {
        this.applyControls();
        this.applyBoundaries();
        Bullet.GameLogicBatch(this.BULLETS);
    }
    
    GameDraw(ctx) {
        Bullet.GameDrawBatch(this.BULLETS, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);        
    }
}

