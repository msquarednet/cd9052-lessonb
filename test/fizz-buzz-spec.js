

describe("FizzBuzz", function() {
    it("exists", function() {
        expect(FizzBuzz).toBeDefined();
    });
    describe("generate fn", function() {
        it("exists", function() {
            expect(FizzBuzz.generate).toBeDefined();
        });
        it("generate(3) returns [1,2,'Fizz']", function() {
            expect(FizzBuzz.generate(3)).toEqual([1,2,'Fizz']);
        });
        it("generate(5) returns [1,2,'Fizz',4,'Buzz']", function() {
            expect(FizzBuzz.generate(5)).toEqual([1,2,'Fizz',4,'Buzz']);
        });
    });
});