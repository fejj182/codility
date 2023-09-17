function sortingDistinct(array: number[]): number {
    const sortedArray: number[] = array.sort()
    let distinctNumbers: number = 0
    for (let i: number = 0; i < array.length; i++) {
        if (i === 0) {
            distinctNumbers++
        } else {
            if (sortedArray[i] !== sortedArray[i-1]) {
                distinctNumbers++
            }
        }
     }
    return distinctNumbers
}

export default sortingDistinct