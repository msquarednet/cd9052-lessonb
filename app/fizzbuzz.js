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