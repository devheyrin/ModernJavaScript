let calculator = {
    read() {
        this.A = +prompt('숫자를 입력');
        this.B = +prompt('숫자를 입력');
    },
    sum() {
        return this.A + this.B;        
    },
    mul() {
        return this.A * this.B;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());