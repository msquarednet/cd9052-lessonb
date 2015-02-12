var FizzBuzz = {
    //generate: function() {return [1,2,'Fizz',4,'Buzz']}
    generate: function(a,b) {
        var start=1;
        var finish=a;
        if (b) {
            start=a;
            finish=b;
        }
        function isFizz(num) {return num%3==0}
        function isBuzz(num) {return num%5==0}
        var results = [];
        for (var i=start; i<=finish; i++) {
            if (isFizz(i) && isBuzz(i)) {
                results.push('FizzBuzz');
            } else if (isFizz(i)) {
                results.push('Fizz');
            } else if (isBuzz(i)) {
                results.push('Buzz');
            } else {
                results.push(i);
            }
        }
        return results;
    }
    
};

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