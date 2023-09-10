const longestBinaryGap = require("./lesson_1_binary_gap");

describe('binary gap', () => {
    it('binary starts and ends in 1 and has binary gap', () => {
        expect(longestBinaryGap(9)).toBe(2)
    });

    it('binary starts and ends in 1, has 1 in the middle and has binary gap', () => {
        expect(longestBinaryGap(1041)).toBe(5)
    });

    it('binary starts and ends in 1, has 1 in the middle and has binary gap', () => {
        expect(longestBinaryGap(529)).toBe(4)
    });

    it('binary starts and ends in 1 and has no binary gap', () => {
        expect(longestBinaryGap(15)).toBe(0)
    });

    it('binary starts in 1 and has no binary gap', () => {
        expect(longestBinaryGap(32)).toBe(0)
    });

    it('binary starts in 1 and has binary gap', () => {
        expect(longestBinaryGap(20)).toBe(1)
    });
});