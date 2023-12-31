import mergeSort from "./merge_sort";

//NOTE: you iterate through an array and create a count of all the occurrences of each possible number.
//To know each possible number you must know the range.
//You then iterate through the array of counts and recreate the array in the right order,
//considering the number of times they were originally counted.

describe('count sort', () => {
    it('should return the same array if length is 1', () => {
        expect(mergeSort([1])).toEqual([1])
    });

    it('should return the same array in order', () => {
        expect(mergeSort([0,1])).toEqual([0,1])
    });

    it('should return the same array missing 1', () => {
        expect(mergeSort([0,2])).toEqual([0,2])
    });

    it('should return the same array with two of same', () => {
        expect(mergeSort([0,0,2])).toEqual([0,0,2])
    });

    it('should return the same array with higher range', () => {
        expect(mergeSort([0,1,2])).toEqual([0,1,2])
    });

    it('should return the reversed array', () => {
        expect(mergeSort([1,0])).toEqual([0,1])
    });

    it('should return the reversed array with repeat', () => {
        expect(mergeSort([1,0,0])).toEqual([0,0,1])
    });


    it('test case', () => {
        expect(mergeSort([3,1,2,0])).toEqual([0,1,2,3])
    });

    it('test case long', () => {
        expect(mergeSort([6,5,3,1,8,7,2,4])).toEqual([1,2,3,4,5,6,7,8])
    });

    it('test case long 2', () => {
        expect(mergeSort([6,2,3,5,8,7,1,4])).toEqual([1,2,3,4,5,6,7,8])
    });
});