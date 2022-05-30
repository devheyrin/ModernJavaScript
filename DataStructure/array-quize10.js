function unique(arr) {
    let result = [];
    arr.map(function(item) {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(strings) ); // Hare, Krishna, :-O