// yes, you need a separate mathUtils file. DO NOT define functions in the app.js file.

export function add(thingOne, thingTwo) {
    return thingOne + thingTwo;
}

export function subtract(thingOne, thingTwo) {
    return thingOne - thingTwo;
}

// benefits of testing:
// if somebody in the future changes the behanior of your function, the tests won't pass
// if you have github set up right, then passing tests is a requirement of merging code into master (CI)
// tests document the expected behavior of a function