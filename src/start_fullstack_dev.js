import path from 'path';
import { fork } from 'child_process';
import chokidar from 'chokidar';

const entry = path.join(__dirname, '/server/server_fullstack_dev.js');

const watcher = chokidar.watch(path.join(__dirname, '/server'));
let serverInstance = fork(entry);

function reload(instance) {
  console.log('Server Reloading');
  instance.kill('SIGINT');
  return fork(entry);
}

watcher.on('ready', () => {
  watcher.on('change', (p) => {
    console.log(`<---- File changed: ${p} ---->`);
    serverInstance = reload(serverInstance);
  });

  watcher.on('add', (p) => {
    console.log(`<---- File added: ${p} ---->`);
    serverInstance = reload(serverInstance);
  });

  watcher.on('unlink', (p) => {
    console.log(`<---- File removed: ${p} ---->`);
    serverInstance = reload(serverInstance);
  });
});

process.on('SIGINT', () => {
  process.exit(0);
});
