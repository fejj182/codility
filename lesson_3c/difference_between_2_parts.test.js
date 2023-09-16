import difference from "./difference_between_2_parts";

describe('difference', () => {
    it('array with index 2', () => {
        expect(difference([1,3])).toBe(2)
    });

    it('array with index 2', () => {
        expect(difference([-1,3])).toBe(4)
    });

    it('array with index 2 reversed', () => {
        expect(difference([3,1])).toBe(2)
    });

    it('array with index 3', () => {
        expect(difference([3,1,2])).toBe(0)
    });

    it('array with index 3', () => {
        expect(difference([1,1,3])).toBe(1)
    });

    it('array with index 5', () => {
        expect(difference([3,1,2,4,3])).toBe(1)
    })
});
