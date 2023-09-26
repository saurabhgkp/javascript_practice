
let cal = {
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
console.log(cal.setVal(2, 8))
console.log(cal.mul())
