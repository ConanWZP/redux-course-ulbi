function* generatorFunction() {
    for (let i=0; i<6; i++) {
        yield i
    }
}

const iterat = generatorFunction()

console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
