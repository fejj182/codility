function pairingArray(array) {

    if (array.length % 2 === 0) {
        return undefined
    }

    const sortedArray = array.sort()

    let matchedNumber = undefined

    for (let x = 0; x < array.length; x++) {
        if (matchedNumber === undefined) {
            matchedNumber = sortedArray[x]
        } else {
            if (sortedArray[x] === matchedNumber) {
                matchedNumber = undefined
            } else {
                break
            }
        }
    }

    return matchedNumber

}

module.exports = pairingArray