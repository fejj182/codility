const countSort = require("./count_sort");

//NOTE: you iterate through an array and create a count of all the occurrences of each possible number.
//To know each possible number you must know the range.
//You then iterate through the array of counts and recreate the array in the right order,
//considering the number of times they were originally counted.

describe('count sort', () => {
    it('should return the same array in order', () => {
        expect(countSort([0,1], 1)).toEqual([0,1])
    });

    it('should return the same array missing 1', () => {
        expect(countSort([0,2], 2)).toEqual([0,2])
    });

    it('should return the same array with two of same', () => {
        expect(countSort([0,0,2], 2)).toEqual([0,0,2])
    });

    it('should return the same array with higher range', () => {
        expect(countSort([0,1,2],2)).toEqual([0,1,2])
    });

    it('should return the reversed array', () => {
        expect(countSort([1,0], 1)).toEqual([0,1])
    });

    it('should return the reversed array with repeat', () => {
        expect(countSort([1,0,0], 1)).toEqual([0,0,1])
    });


    it('test case', () => {
        expect(countSort([3,1,2,0], 3)).toEqual([0,1,2,3])
    });
});