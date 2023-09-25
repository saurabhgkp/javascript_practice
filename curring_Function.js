// function sum (a ,b){
//     return a+b
// }
// console.log(sum(2,3));

function sum(a) {
    return function (b) {
        return a + b
    }
}
//  console.log(sum(2)(3));

function triple(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(triple(2)(3)(7));