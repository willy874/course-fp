// 柯里化 curry
// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 柯里化的基本思想是：利用闭包返回一个函数，这个返回的函数可以处理新传入的参数，然后返回结果。
// 通常来说，一个 curry 函数会返回一个新函数，新函数接收一个参数，然后返回一个新函数。重复这样的过程，直到返回一个最终结果。

const add = function (a, b, c, d) {
  return a + b + c + d;
}

const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args)
  }
  return curry.bind(undefined, fn, ...args)
}

// console.log(curry(add)(1));
// console.log(curry(add)(1, 2));
// console.log(curry(add)(1, 2, 3));
// console.log(curry(add)(1, 2, 3, 4));
// console.log(curry(add)(1)(2)(3)(4));

// Case

const immediateCallbackA = (fn) => {
  return new Promise((resolve) => {
    setImmediate((v) => {
      resolve(fn(v))
    }, 1)
  })
}
const immediateCallbackB = (fn) => {
  return new Promise((resolve) => {
    setImmediate((v) => {
      resolve(fn(v))
    }, 2)
  })
}
const immediateCallbackC = (fn) => {
  return new Promise((resolve) => {
    setImmediate((v) => {
      resolve(fn(v))
    }, 3)
  })
}
const immediateCallbackD = (fn) => {
  return new Promise((resolve) => {
    setImmediate((v) => {
      resolve(fn(v))
    }, 4)
  })
}


// Base Code
/** File(1) */
function test1() {
  return new Promise((resolve) => {
    immediateCallbackA((a) => {
      return immediateCallbackB((b) => {
        return immediateCallbackC((c) => {
          return immediateCallbackD((d) => {
            resolve([a, b, c, d]);
          })
        })
      })
    })
  })
}
/** File(2) */
test1().then((res) => {
  const [a, b, c, d] = res
  console.log('test1', add(a, b, c, d));
})

// Curry Function Code
/** File(1) */
const createHandler = () => Promise.resolve(curry(add))
/** File(2) */
const handleA = (fn) => immediateCallbackA((a) => fn(a))
/** File(3) */
const handleB = (fn) => immediateCallbackB((b) => fn(b))
/** File(4) */
const handleC = (fn) => immediateCallbackC((c) => fn(c))
/** File(5) */
const handleD = (fn) => immediateCallbackD((d) => fn(d))
/** File(6) */
createHandler()
  .then(handleA)
  .then(handleB)
  .then(handleC)
  .then(handleD)
  .then((res) => console.log('test2', res))

