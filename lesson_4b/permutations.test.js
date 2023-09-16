import isPermutation from "./permutations";

describe('isPermutation', () => {
    it('should return 1 if permutation', () => {
        expect(isPermutation([1,2])).toBe(1)
    });

    it('should return 1 if permutation (unsorted)', () => {
        expect(isPermutation([2,1])).toBe(1)
    });

    it('should return 0 if not including 1', () => {
        expect(isPermutation([2,3])).toBe(0)
    });

    it('should return 0 if not including 1', () => {
        expect(isPermutation([2,3,4])).toBe(0)
    });

    it('should return 0 if not consecutive', () => {
        expect(isPermutation([1,3])).toBe(0)
    });

    it('should return 0 if number duplicated', () => {
        expect(isPermutation([1,3,3])).toBe(0)
    });

    it('should return 0 if number duplicated', () => {
        expect(isPermutation([3,3,3])).toBe(0)
    });

    it('should return 0 if empty', () => {
        expect(isPermutation([])).toBe(0)
    });

    it('should return 1 for test case', () => {
        expect(isPermutation([4,1,3,2])).toBe(1)
    });

    it('should return 0 for test case', () => {
        expect(isPermutation([4,1,3])).toBe(0)
    });
});
