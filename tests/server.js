const path = require('path');
const Polly = require('@pollyjs/node-server');

module.exports = new Polly.Server({
  recordingsDir: path.join(__dirname, 'recordings'),
  quiet: true
});
