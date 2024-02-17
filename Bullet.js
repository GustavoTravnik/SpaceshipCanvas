import { Point, Rectangle, Size, gameResolutionRectangle } from './Helper.js';
import { Player } from './Player.js';

export class Bullet {
    texture = new Image();
    position = new Point(0, 0);
    direction = new Point(0, 0);
    isAlive = true;

    constructor(texture, startPosition, direction) {
        this.texture = texture;
        this.position = startPosition;
        this.direction = direction;
    }

    GameLogic() {
        this.position.sum(this.direction);
        if (!Rectangle.getRectangleByPointAndTexture(this.position, this.texture).intersectRect(gameResolutionRectangle)) {
            this.isAlive = false;
        }
    }
    
    GameDraw(ctx) {
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    }

    static GameLogicBatch(bullets) {
        bullets.forEach(x => x.GameLogic());
        for (let i = 0; i < bullets.length; i++) {
            const currentBullet = bullets[i];
            if (!currentBullet.isAlive) {
                bullets.splice(i, 1);
            }
        }
    }

    static GameDrawBatch(bullets, ctx) {
        bullets.forEach(x => x.GameDraw(ctx));
    }
}