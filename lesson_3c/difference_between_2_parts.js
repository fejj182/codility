function difference(array) {
    let minDifference
    let leftSum = 0
    let rightSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, leftSum)

    for(let i = 0; i < array.length - 1; i++) {
        leftSum += array[i]
        rightSum -= array[i]
        
        const difference = Math.abs(rightSum - leftSum)
        if (minDifference === undefined || difference < minDifference) {
            minDifference = difference
        }
    }

    return minDifference
}

export default difference
