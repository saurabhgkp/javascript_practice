
let cal1 = {
    setVal(a, b) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}
console.log(cal1.setVal(2, 8))
console.log(cal1.mul())


// object  cal.mul(2).add(5)

let cal = {
    total: 1,
    add(a) {
        this.total += a
        return this
    },
    sub(a) {
        this.total -= a
        return this
    },
    mul(a) {
        this.total *= a
        return this
    },
    div(a) {
        this.total /= a
        return this
    }
}

const fn = cal.mul(2).add(5)
console.log(fn.total)

