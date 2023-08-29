function difference(array) {
    let minDifference

    for(let i = 0; i < array.length - 1; i++) {
        let firstInitialValue = 0
        const firstSliceSum = array.slice(0, i+1).reduce((accumulator, currentValue) => accumulator + currentValue, firstInitialValue)
        let secondInitialValue = 0
        const secondSliceSum = array.slice(i+1).reduce((accumulator, currentValue) => accumulator + currentValue, secondInitialValue)

        const difference = Math.abs(secondSliceSum - firstSliceSum)
        if (minDifference === undefined || difference < minDifference) {
            minDifference = difference
        }
    }

    return minDifference
}

module.exports = difference
