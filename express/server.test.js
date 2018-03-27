const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');
require('mocha');

it('should return a hello world respons', (done) => {
  request(app)
    .get('/')
      .expect('Hey word!!')
        .expect((res) => {
          expect(res.body.toString()).toBeA('string');
        })
        .end(done);
});
