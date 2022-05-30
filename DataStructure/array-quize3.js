function filterRangeInPlace(arr, a, b) {
    console.log("ddd")
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            console.log(arr);   
        }
    }
}