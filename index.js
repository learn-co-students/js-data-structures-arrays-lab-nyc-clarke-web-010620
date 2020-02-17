// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(name)
}

test 

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    let arr = [...drivers]
    arr.pop()
    return arr
}

function removeFirstDriver() {
    let arr = [...drivers]
    arr.shift()
    return arr
}