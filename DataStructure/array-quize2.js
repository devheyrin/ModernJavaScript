function filterRange(arr, a, b) {
    let newArray = arr.filter(item => item >= a && item <= b);
    console.log(newArray);
    return newArray;
}
