function pairingArray(array) {

    if (array.length % 2 === 0) {
        return undefined
    }

    const sortedArray = array.sort()

    let matched
    let matchedNumber

    sortedArray.every((number) => {
        if (matchedNumber === undefined) {
            matchedNumber = number
        } else {
            if (number === matchedNumber) {
                matched = true
            } else {
                if (matched === true) {
                    matched = false
                    matchedNumber = number
                } else {
                    return false
                }
            }
        }

        console.log({matched});

        return true
    })

    return matchedNumber

}

module.exports = pairingArray