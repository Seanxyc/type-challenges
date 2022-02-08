type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}




// js
//
// function myPick (todo, keys) {
//   const obj = {}
//   keys.forEach(key => {
//     obj[key] = todo[key]
//   })
// 
//   return obj
// }
