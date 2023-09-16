import missingElement from "./missing_element";

describe('missing element', () => {
    it('should return missing element when in order and consecutive numbers at end', () => {
        expect(missingElement([1,3])).toBe(2)
    });

    it('should return missing element when in order and consecutive numbers at end', () => {
        expect(missingElement([1,3,4])).toBe(2)
    });

    it('should return missing element when in order and consecutive numbers at end', () => {
        expect(missingElement([1])).toBe(2)
    });

    it('should return missing element when in order and consecutive numbers at end', () => {
        expect(missingElement([3,1])).toBe(2)
    });

    it('should return missing element when in order and consecutive numbers at end', () => {
        expect(missingElement([2,3,5,1])).toBe(4)
    });

    it('should return missing element when in order and consecutive numbers at start', () => {
        expect(missingElement([])).toBe(1)
    });

});