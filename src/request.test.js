
const { Polly } = require('@pollyjs/core');
const server = require('../tests/server');
const request = require('./request');

let serverInstance;

beforeAll(function() {
  serverInstance = server.listen();
});

afterAll(async function() {
  serverInstance && serverInstance.close();
  serverInstance = null;
});

test('akita api image test', async () => {
  const polly = new Polly('xhr test', {
    adapters: ['xhr'],
    persisterOptions: {
      host: 'http://localhost:3000'
    }
  });

  const req = await request('https://dog.ceo/api/breed/akita/images');
  const resp = JSON.parse(req.response);

  expect(resp.message[0]).toBe('https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg');

  await polly.stop();
});