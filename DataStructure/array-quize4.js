function copySorted(arr) {
    let copiedArr = arr.slice();
    copiedArr.sort();
    return copiedArr;
}


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
