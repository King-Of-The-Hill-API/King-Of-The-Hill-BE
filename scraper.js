const parser = require('./lib/parser');
const request = require('./lib/request');
const store = require('./lib/store');

// Data Pipeline
request()
  .then(parser)
  .then(store)
  .then(res => console.log(res.length));
