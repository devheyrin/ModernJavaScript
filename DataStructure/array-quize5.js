function Calculator() {
    this.methods = {
        "-": (a, b) => a-b,
        "+": (a, b) => a+b,
    };

    this.calulate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }


}

let calc = new Calculator;
console.log(calc.calulate('3 - 7'));