// for (let i=2; i <= 10; i++){
//     if (i % 2 != 0) continue;
//     alert(i)
// }

// let i = 0;
// while (i < 3){
//     alert(i);
//     i++
// }

// while (true){
//     let value = prompt('100보다 큰 수를 입력');
//     if (value > 100 || value == null) {
//         break;
//     }else{
//         alert(value);
//     }
// }

// let num;
// do {
//     num = prompt("100보다 큰 수를 입력");
// } while (num <= 100 && num);

let num = prompt('숫자를 입력');
outer:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    alert(i)
}