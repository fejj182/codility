const pairingArray = require("./lesson_2b_pairing_array");

describe('pairing array', () => {
    it('should return an integer', () => {
        expect(pairingArray([1])).toBe(1)
    });

    it('should return an integer', () => {
        expect(pairingArray([2,2])).toBe(undefined)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([0,0,1])).toBe(1)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([0,0,1,1,2])).toBe(2)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([0,0,1,2,2])).toBe(1)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([1,1,0])).toBe(0)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([9,3,9,3,9,7,9])).toBe(7)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([-9,3,9,3,-9,7,9])).toBe(7)
    });

    it('should return unpaired number', () => {
        expect(pairingArray([-9,3,9,3,-9,7,9])).toBe(7)
    });
});