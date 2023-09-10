function missingElement(array) {
    let expectedTotal = 0
    let actualTotal = 0

    if (array.length === 0) {
        return 1
    }

    for (let i = 0; i < array.length; i++) {
        expectedTotal += i+1
        actualTotal += array[i]    
    }

    return expectedTotal + array.length + 1 - actualTotal
}

module.exports = missingElement