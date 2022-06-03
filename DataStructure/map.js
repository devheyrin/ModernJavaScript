let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);

let john = {name: "John"};
let visitCountMap = new Map();
visitCountMap.set(john, 123);
console.log(visitCountMap.get(john)); // 123

let visitCountObj = {};
visitCountObj[john] = 123;
console.log(visitCountObj['[object Object]']);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

for (let vege of recipeMap.keys()) {
    console.log(vege);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}