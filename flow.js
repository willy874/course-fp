// Flow

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Base Code

// function plus(arr) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] + 1)
//   }
//   return result
// }
// function double(arr) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2)
//   }
//   return result
// }
// function underTen(arr) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 10) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(underTen(double(plus(array))))

// FP Code

// File(1)
const plus = (arr) => arr.map((v) => v + 1)
// File(2)
const double = (arr) => arr.map((v) => v * 2)
// File(3)
const underTen = (arr) => arr.filter((v) => v < 10)

// Chain Code File(4)
console.log(underTen(double(plus(array))))

// FP pipe Code
// File(4)
function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce(function (value, fn) {
      return fn(value)
    }, initialValue)
  }
}
const pipeFlow = pipe(plus, double, underTen)
// File(5)
/
console.log(pipeFlow(array));

// FP compose Code
// File(4)
function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight(function (value, fn) {
      return fn(value)
    }, initialValue)
  }
}
const composeFlow = compose(underTen, double, plus)
// File(5)
// console.log(composeFlow(array));
