function isPermutation(array) {
    if (array.length === 0) {
        return Number(false)
    }

    let isPerm = true
    const sortedArray = array.sort((a,b) => {
        return a-b
    })
    for (let i=1; i <= sortedArray.length; i++) {
        if (i !== sortedArray[i-1]) {
            isPerm = false
            break;
        }
    }
    return Number(isPerm)
}

module.exports = isPermutation
