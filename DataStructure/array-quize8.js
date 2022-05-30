function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        console.log(i)
        let j = Math.floor(Math.random() * (i+1));
        console.log(j);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let array = [1, 2, 3];
shuffle(array);
console.log(array);