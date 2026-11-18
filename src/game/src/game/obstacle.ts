export class Obstacle {
    x: number;
    y: number = -20;
    size: number = 30;
    speed: number;

    constructor(canvasWidth: number, speed: number) {
        this.x = Math.random() * canvasWidth;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.x - 15, this.y - 15, this.size, this.size);
    }
}
