import frogJump from "./frog_jump";

describe('frog_jump', () => {
    it('should jump 1 place if reaches target exactly', () => {
        expect(frogJump(1,2,1)).toBe(1)
    });

    it('should jump 1 place if passes target', () => {
        expect(frogJump(1,2,2)).toBe(1)
    });

    it('should jump 1 place if passes target by a lot', () => {
        expect(frogJump(1,2,10)).toBe(1)
    });

    it('should jump several places', () => {
        expect(frogJump(10,85,30)).toBe(3)
    });

    it('should not jump if already at target', () => {
        expect(frogJump(10,10,30)).toBe(0)
    });

    it('should not jump if already at target', () => {
        expect(frogJump(1000000,2000000,10)).toBe(100000)
    });

    it('should throw error if finish is before start', () => {
        expect(() => {
            frogJump(10,5,30)
        }).toThrow("Finish has to be before start")
    });

   it('should throw error if distance is zero', () => {
        expect(() => {
            frogJump(10,15,0)
        }).toThrow("Frog cannot reach")
    });
});