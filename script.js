// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;

const add = (a, b) => a + b;

console.log(add(5, 21)); 

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);
const difference = (function(a, b) {
    return a - b;
})(8, 3); 

console.log(difference); 

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;
const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(5)); 

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:
function Multiply(a, b, callback) {
  return callback(a * b);
}
Multiply(4, 5, (result) => console.log(result));
// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;
const isPositive = (num) => num > 0;

console.log(isPositive(5));   
console.log(isPositive(4));  
console.log(isPositive(-2));   

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);
const double = function(n) {
    return n * 2;
};

console.log(double(5));  
console.log(double(-3)); 
 

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:
function doubleNumber(num, callback) {
    return callback(num);
}
const Double = (n) => n * 2;

const result1 = doubleNumber(8, double);
console.log(result1); 

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;
const isDivisibleByThree = (num) => num % 3 === 0;

console.log(isDivisibleByThree(9));  
console.log(isDivisibleByThree(10)); 
console.log(isDivisibleByThree(15)); 
console.log(isDivisibleByThree(7));  

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.
function evenNumber(num, callback) {
    return callback(num % 2 === 0);
  }
  evenNumber(4, (result) => console.log(result));
// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;
const cube = (num) => num * num * num;

console.log(cube(3)); 
console.log(cube(4)); 
console.log(cube(-2)); 

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.
  function multiplyNumbers(a, b,  Callback){
    return Callback(a,b)
  }
  const multiply = (x, y) => x * y
  const result = multiplyNumbers(12, 8, multiply);
  console.log(result);
// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;
const isGreaterThanZero = (num) => num > 0;

console.log(isGreaterThanZero(5));   
console.log(isGreaterThanZero(-3));  
console.log(isGreaterThanZero(0));   

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:
const half = (function(n) {
    return n / 2;
})(50); 

console.log(half); 


// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.
function addNumbers(a, b, callback) {
    return callback(a, b);
}

// Callback function
const sum = (x, y) => x + y;

// მაგალითის გაწვდვა
const Result = addNumbers(50, 10, sum);
console.log(Result); 

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;
const square = (num) => num * num;

console.log(square(8)); 
console.log(square(6)); 
