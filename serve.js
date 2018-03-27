const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const argsv = yargs.argv;

let command = argsv._[0];

// fs.appendFileSync('greetings.txt', `hello world ${ os.userInfo().username }`);

console.log(process.argv);
