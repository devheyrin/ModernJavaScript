function Calculator() {

    this.read = function() {
        this.a = +prompt('enter number');
        this.b = +prompt('enter number');
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
console.log("Sum" + calculator.sum());
console.log("Mul"+ calculator.mul());