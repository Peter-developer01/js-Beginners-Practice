'use strict';

/* alert(1); */

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log(leftBorderWidth);

const number = 5;
const string = 'Hello!';
const sym = Symbol('C');/* остановился на 2 41 */
const boolean = true;
null;
undefined;
const obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr[0]);

/* alert('Hello World!'); */

/* let answer = confirm('Are you here?');

console.log(answer); */

/* let answer = +prompt('Есть ли вам 18?', 'Да');

console.log(typeof answer);

console.log('arr' + ' - object');

console.log(4 + +' - object'); */

let incr = 10,
    decr = 10;

/* incr++;
decr--; */

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log('2' == 2);
console.log('2' === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || !isClose);