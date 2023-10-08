import maxOfTriplets from "./max_of_triplets";

describe('max of triplets', () => {
    it('should return -1 if less than 3 numbers given', () => {
        expect(maxOfTriplets([1])).toBe(-1)
    });

    it('should return sum of triplets if only 3 numbers given', () => {
        expect(maxOfTriplets([1,2,3])).toBe(6)
    });

    it('should return sum of last triplet', () => {
        expect(maxOfTriplets([1,2,3,4])).toBe(24)
    });

    it('should return sum of highest triplet', () => {
        expect(maxOfTriplets([4,1,2,3])).toBe(24)
    });

    it('should return sum of triplet if all the same', () => {
        expect(maxOfTriplets([2,2,2,2])).toBe(8)
    });

    it('should return sum of triplet if all negative', () => {
        expect(maxOfTriplets([-1,-2,-3,-4])).toBe(-6)
    });

    it('should return sum of triplet if some negative', () => {
        expect(maxOfTriplets([-1,-2,-3,4])).toBe(24)
    });

    it('should return sum of triplet if some negative', () => {
        expect(maxOfTriplets([-3,1,2,-2,5,6])).toBe(60)
    });
});