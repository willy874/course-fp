// 閉包 closure
// 1. 一個函式可以記住它被創建時的環境
// 2. 一個函式可以在它被創建的環境之外被調用
// 3. 一個函式可以調用它被創建時的環境裡的變量

// console.log('========== closure1 ==========')

// const closure1 = () => {
//   let a = 1
//   return {
//     getA: () => a,
//     setA: (value) => a = value
//   }
// }
// const { getA, setA } = closure1()
// setA(10)
// const result = getA()
// console.log(result);

// console.log('========== closure2 ==========');
// // 當使用解構時，this 會指向 undefined

// const closure2 = (array) => {
//   const instance = array.concat(4)
//   return instance
// }

// try {
//   const { forEach } = closure2([1, 2, 3])
//   forEach((n) => {
//     console.log(n);
//   })
// } catch (error) {
//   console.log('噴錯了喔');
// }

// console.log('========== closure3 ==========');
// // 解構後，使用 bind 綁定 this

// const closure3 = (array) => {
//   const instance = array.concat(4)
//   return {
//     // forEach: instance.forEach.bind(instance)
//     forEach: (fn) => instance.forEach(fn)
//   }
// }


// try {
//   const { forEach } =  closure3([1, 2, 3])
//   forEach((n) => {
//     console.log(n);
//   })
// } catch (error) {
//   console.log('噴錯了喔');
// }

// console.log('========== closure4 ==========');
const getConfig = (callback) => callback({ a: 1 })

// Base Case

// const data = { b: 2 }

// console.log('Base', getConfig((config) => Object.assign({}, config, { b: 2 })));

// Closure Case

/** File(1) */
const assignConfig = (option) => {
  return (config) => {
    return Object.assign({}, config, option)
  }
}
/** File(2) */
const data = { b: 2 }

console.log('Closure', getConfig(assignConfig(data)));