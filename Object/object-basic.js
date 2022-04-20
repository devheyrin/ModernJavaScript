let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(schedule) {
    // 반복문이 시작된다는 것은 프로퍼티가 하나라도 있다는 것이므로 
    // false 를 리턴한다. 
    for (let key in schedule) {
        return false;
    }
    return true;
}

function getSumOfSalaries(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    return sum;
}

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] == 'number') {
            object[key] *= 2;
        }
    }
}