// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
// array[1] = 'hello';

// for practice

// use forEach
array.forEach(element => console.log(element));

// use map
const newNew = array.map(n => n + 1);
console.log(newNew);

// use pop
newNew.pop();
console.log(newNew);

// use push
newNew.push(25);
console.log(newNew);

// use shift
newNew.shift();
console.log(newNew);

// use unshift
newNew.unshift(17);
console.log(newNew);

// use filter
newNew.filter(i => i > 5);
console.log(newNew);
