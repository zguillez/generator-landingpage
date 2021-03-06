#! /usr/bin/env node
/* eslint no-unused-vars: "off", no-restricted-modules: "off" */
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.sshconfig'), 'utf8'));
// -----------------------------------
let command = `cd dist && sshpass -p ${config.ssh.password} scp -r * ${config.ssh.username}@${config.ssh.host}:${config.ssh.path}/${config.ssh.folder}`;
console.log(`=> Command: ${command}`.cyan);
shell.exec(command);
console.log('=> Done!\n'.green);
