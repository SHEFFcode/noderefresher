const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

request.get(
  `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv._[0])}`,
  { json: true },
  (err, response, body) => {
    console.log(JSON.stringify(body, null, 2));
  });