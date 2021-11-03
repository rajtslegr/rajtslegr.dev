'use strict';

process.chdir(__dirname + '/..');

const args = process.argv.slice(2);
const nodeEnv = args.shift();
const envs = { dev: 'development', prod: 'production' };

if (!Object.keys(envs).includes(nodeEnv)) {
  process.stderr.write('Usage: prisma [dev|prod] [prisma-commands]\n');
  process.exit(0);
}

process.env['NODE_ENV'] = envs[nodeEnv];

require('dotenv-flow').config();

const { spawn } = require('child_process');
const opts = { stdio: 'inherit' };

if (process.platform === 'win32') {
  spawn('cmd', ['/c', 'node_modules\\.bin\\prisma.cmd', ...args], opts);
} else {
  spawn('node_modules/.bin/prisma', args, opts);
}
