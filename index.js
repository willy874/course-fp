// function forLoop(max) {
//   let count = 0
//   for (let i = count; i <= max; i++) {
//     count += i
//   }
//   return count
// }

// function forLoop(max) {
//   return new Array(max).fill(0).reduce((acc, cur, i) => {
//     acc += i
//     return acc
//   }, 0)
// }

function concat(arr, add) {
  return add.reduce((acc, item) => {
    acc.push(item)
    return acc
  }, [...arr])
}

const array = [1,2,3]
const newArray = concat(array, [4,5,6])

console.log(array);
console.log(newArray);