export class Player {
    x: number = 400;
    y: number = 550;
    size: number = 20;

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#f0f';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#f0f';
        ctx.fillRect(this.x - 10, this.y - 10, this.size, this.size);
        ctx.shadowBlur = 0;
    }
}
