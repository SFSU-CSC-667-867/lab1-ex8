// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = test => {
  console.log(test);
};

arrow('hi');

// for practice

// make an arrow function with no block body
const myArrow = y => y + 1;
console.log(myArrow(5));

// make a function that returns a function
const functionFactory = () => () => console.log(`tight`);

functionFactory()();

const a = functionFactory();
a();
const another = functionFactory;
another()();
