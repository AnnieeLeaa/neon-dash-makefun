import { Player } from './game/player';
import { Obstacle } from './game/obstacle';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
canvas.width = 800;
canvas.height = 600;

const player = new Player();
let obstacles: Obstacle[] = [];
let score = 0;

function update() {
    if(Math.random() < 0.05) obstacles.push(new Obstacle(800, 2 + score * 0.1));
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 600);
    
    player.draw(ctx);
    obstacles.forEach((o, i) => {
        o.update();
        o.draw(ctx);
        if(o.y > 600) { obstacles.splice(i, 1); score++; }
        if(Math.hypot(player.x - o.x, player.y - o.y) < 30) { score = 0; obstacles = []; }
    });
    
    ctx.fillStyle = '#0ff';
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 20, 40);
    
    requestAnimationFrame(update);
}

window.addEventListener('mousemove', e => {
    player.x = e.clientX - canvas.offsetLeft;
});

update();

// Added some particles for extra effect
