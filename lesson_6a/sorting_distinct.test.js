import sortingDistinct from "./sorting_distinct";

describe('Sorting distinct', () => {
    it('should return 0 for empty array', () => {
        expect(sortingDistinct([])).toBe(0)
    });

    it('should return 1 for a single value', () => {
        expect(sortingDistinct([1])).toBe(1)
    });

    it('should return 1 for 2 duplicated values', () => {
        expect(sortingDistinct([1,1])).toBe(1)
    });

    it('should return 1 for 3 duplicated values', () => {
        expect(sortingDistinct([1,1,1])).toBe(1)
    });

    it('should return 2 for 2 distinct values', () => {
        expect(sortingDistinct([1,2])).toBe(2)
    });

    it('should return 3 for 3 distinct values', () => {
        expect(sortingDistinct([1,2,3])).toBe(3)
    });

    it('test case 1', () => {
        expect(sortingDistinct([2,1,1,2,3,1])).toBe(3)
    });

    it('test case 2', () => {
        expect(sortingDistinct([1,2,1,2])).toBe(2)
    });

    it('test case 3', () => {
        expect(sortingDistinct([999999999,999999999,999999998,999999998])).toBe(2)
    });

    it('jscript', () => {
        expect(sortingDistinct([1,2,11,2])).toBe(3)
    });
});