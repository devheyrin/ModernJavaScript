function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('동의를 받으셨나요?');
    }
}

function checkAge(age) {
    return (age > 18) ? 
            true : 
            confirm('동의를 받으셨나요?') 
}

function checkAge(age) {
    return (age > 18) || confirm('동의를 받으셨나요?')
}

function min(a, b) {
    return (a < b) ? a : b;
}

function getPow(x, n) {
    return x**n
}

function isNatNumber(n) {
    return (n >= 1)? true:false;
}

function showPow() {
    let x = prompt("x를 입력");
    let n;
    do {
        n = prompt("n을 입력");
    } while (!isNatNumber(n))
    alert(getPow(x, n));
}