function longestBinaryGap(number) {
    const longestGap = 0
    const numberAsBinary = number.toString(2)

    console.log({numberAsBinary})

    const binaryAsArray = numberAsBinary.split('1');

    console.log({binaryAsArray, length: binaryAsArray.length})

    if (binaryAsArray[0] === '' && binaryAsArray[binaryAsArray.length - 1] === '' || binaryAsArray.length > 2) {
        const trimmedBinaryAsArray = binaryAsArray.slice(1,binaryAsArray.length - 1)

        console.log({trimmedBinaryAsArray})

        let maxLengthOfZeros = 0

        const zeros = trimmedBinaryAsArray.forEach(splitNumbers => {
            if (splitNumbers.length > maxLengthOfZeros) {
                maxLengthOfZeros = splitNumbers.length
            }
        })

        return maxLengthOfZeros;
    } else {
        return 0
    }
};

module.exports = longestBinaryGap;