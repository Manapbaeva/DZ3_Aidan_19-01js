//Задача 1
let a;
if (a > 0){
    let ggg = function () {
        console.log('!');
    }
} else {
    let ggg = function () {
        console.log('!!')
    }
}

//Задача 2
let arr = [];
for (i = 1; i <= 10; i++) {
    arr[i] = 'x'
}
console.log(arr)

// Задача 3
function counter () {
    let i = 1;
    return function ()
    return i++
}
let func = counter();
console.log(func());
console.log(func());
console.log(func());
