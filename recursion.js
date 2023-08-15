function recursion(max, callback, count = 0) {
  callback(count)
  return max > count ? recursion(max, callback, count + 1) : count
}

function recursionLoop(max, callback) {
  return recursion(max, callback)
}

function forLoop(max, callback) {
  let count = 0
  for (let i = count; i <= max; i++) {
    count = i
    callback(i)
  }
  return count
}

console.log('recursionLoop', recursionLoop(10, (count) => console.log('loop', count)));
console.log('forLoop', forLoop(10, (count) => console.log('loop', count)));
