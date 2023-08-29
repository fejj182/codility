const earliestLeaves = require("./lesson_4a_earliest_leaves");

describe('earliest leaves', () => {
    it('for a single leaf, return the time taken', () => {
        expect(earliestLeaves(1, [1])).toBe(0)
    });

    it('for two leaves, return the time taken', () => {
        expect(earliestLeaves(2, [1,2])).toBe(1)
    });

    it('for two leaves, return the time taken', () => {
        expect(earliestLeaves(1, [1,2])).toBe(0)
    });

    it('for two leaves reversed, return the time taken', () => {
        expect(earliestLeaves(2, [2,1])).toBe(1)
    });

    it('if a leaf missing, return -1', () => {
        expect(earliestLeaves(1, [2])).toBe(-1)
    });

    it('if a leaf missing, return -1 ', () => {
        expect(earliestLeaves(2, [2, 2, 2, 2, 2])).toBe(-1)
    });

    it('for not enough time, return -1', () => {
        expect(earliestLeaves(2, [1])).toBe(-1)
    });

    it('for given test case', () => {
        expect(earliestLeaves(5, [1,3,1,4,2,3,5,4])).toBe(6)
    });

    it('if middle step lands last', () => {
        expect(earliestLeaves(3, [1, 3, 1, 3, 2, 1, 3])).toBe(4)
    })
});