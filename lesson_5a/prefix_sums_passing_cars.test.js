const howManyPassingCars = require("./lesson_5a_prefix_sums_passing_cars");

describe('howManyPassingCars', () => {
    it('should return 1 if east car before west car', () => {
        expect(howManyPassingCars([0,1])).toBe(1)
    });

    it('should return 2 if east car before 2 west cars', () => {
        expect(howManyPassingCars([0,1,1])).toBe(2)
    });

    it('should return 2 if 2 east cars before west car', () => {
        expect(howManyPassingCars([0,0,1])).toBe(2)
    });

    it('should return 4 if 2 east cars before 2 west cars', () => {
        expect(howManyPassingCars([0,0,1,1])).toBe(4)
    });

    it('should return 3 if 1 east car before 2 west cars and 2nd east car before 1 west car', () => {
        expect(howManyPassingCars([0,1,0,1])).toBe(3)
    });

    it('should return 3 if 1 east car before 2 west cars and 2nd east car before 1 west car (plus extra west car)', () => {
        expect(howManyPassingCars([1,0,1,0,1])).toBe(3)
    });

    it('should return 0 if west car already passed east car', () => {
        expect(howManyPassingCars([1,0])).toBe(0)
    });

    it('should return 1 if for only east car not passed west car', () => {
        expect(howManyPassingCars([1,0,1,0])).toBe(1)
    });

    it('should return 0 if 2 cars east', () => {
        expect(howManyPassingCars([0,0])).toBe(0)
    });

    it('should return 0 if 2 cars west', () => {
        expect(howManyPassingCars([1,1])).toBe(0)
    });

    it('should return 0 if 0 cars', () => {
        expect(howManyPassingCars([])).toBe(0)
    });

    it('should return 0 if 1 east car and 1 random number', () => {
        expect(howManyPassingCars([0,2])).toBe(0)
    });

    it('should return 0 if 1 east car, 1 west car and 1 random number', () => {
        expect(howManyPassingCars([0,1,2])).toBe(1)
    });

    it('should return 5 for example', () => {
        expect(howManyPassingCars([0,1,0,1,1])).toBe(5)
    });
});