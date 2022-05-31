// let range = {
// 	from: 1,
// 	to: 5
// };

// range[Symbol.iterator] = function() {
//     console.log("called")
// 	return {
// 		current: this.from,
//         last: this.to,
//         next() {
//             console.log(this.current, this.last)
//             if (this.current <= this.last) {
//                 return {done: false, value: this.current++};
//             } else {
//                 return {done: true};
//             }
//         }
//     }
// }

let range = {
    from: 1, 
    to: 5,

    [Symbol.iterator]() {
        console.log('iterator')
        this.current = this.from;
        console.log(this);
        return this;
    }, 

    next() {
        console.log('next')
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
};


for (let num of range) {
    console.log("current "+range.current)
    console.log(num);
}