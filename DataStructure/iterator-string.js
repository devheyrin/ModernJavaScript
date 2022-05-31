let str = "Hello";
let iterator = str[Symbol.iterator]();
console.log(str)

while (true) {
    let result = iterator.next();
    console.log(iterator)
    console.log(result.done)
    if (result.done) break;
    console.log(result.value);
}