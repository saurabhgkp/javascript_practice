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
// console.log(triple(2)(3)(7));
function evaluate(opration) {
    return function (a) {
        return function (b) {
            switch (opration) {
                case "sum": return a + b
                case "mul": return a * b
                case "divi": return a / b
                case "sub": return a - b

            }
        }
    }
}
// console.log(evaluate("mul")(3)(7));

const mul1 = evaluate("mul")
console.log(mul1(3)(7));

function sumN(a) {
    return function (b) {
        if (b) return sumN(a + b)
        else return a
    }

}

console.log(sumN(2)(3)(5)())