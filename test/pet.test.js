const { Pet } = require('../services/pet');
const expect = require('chai').expect;
const { isAvailable } = require('../helper');

describe('Pet store', function () {
    const pet = new Pet();

    it('should return pet by status - available', async function () {
        const petResponse = await pet.getPetByStatus('available');
        let availablePets = petResponse.filter(isAvailable);
        console.log(availablePets);
        expect(availablePets).to.have.length.greaterThan(0);
    });
});


