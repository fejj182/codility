import solution from "./shift_array";

describe('solution', () => {
    it('should rotate array to the right 1 time', () => {
        expect(solution([3, 8, 9, 7, 6], 1)).toStrictEqual([6, 3, 8, 9, 7])
    });

    it('should rotate array to the right 2 times', () => {
        expect(solution([3, 8, 9, 7, 6], 2)).toStrictEqual([7, 6, 3, 8, 9])
    });

    it('should rotate array to the right 3 times', () => {
        expect(solution([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8])
    });

    it('should return the same array if empty array is passed', () => {
        expect(solution([], 4)).toStrictEqual([])
    });
});