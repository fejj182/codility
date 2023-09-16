function selectionSort(array: number[]): number[] {
    const sortedArray: number[] = []
    let subArray = array
    for (let i=0; i < array.length; i++) {
        let minimum = {
            number: subArray[0],
            index: 0
        }
        for (let l=1; l < subArray.length; l++) {
            if (subArray[l] < minimum.number) {
                minimum.number = subArray[l]
                minimum.index = l
            }
        }
        sortedArray.push(minimum.number)
        subArray = subArray.slice(0,minimum.index).concat(subArray.slice(minimum.index + 1))
    }
    return sortedArray
}

export default selectionSort