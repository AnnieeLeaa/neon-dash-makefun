import { readFileSync } from 'fs';
import { createServer } from 'http';

const html = readFileSync('index.html', 'utf-8');
createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000, () => console.log('Neon Dash running on port 3000'));
