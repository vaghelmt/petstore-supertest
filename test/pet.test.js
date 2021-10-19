const request = require('supertest');

describe('Pet', function() {
    it('should be able to find by status', function() {
        request('https://petstore.swagger.io')
        .get('/v2/pet/findByStatus?status=available')
        .expect('Content-Type', /json/)
        .expect(200)
    });
  });