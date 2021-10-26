const request = require('supertest');

class Pet {

    async getPetByStatus(status) {
        return request('https://petstore.swagger.io')
            .get('/v2/pet/findByStatus')
            .query({ status: status })
            .then(response => {
                return response.body;
            })
            .catch(err => { return err })
    }

}

module.exports = { Pet }