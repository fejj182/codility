function selectionSort(array: number[]): number[] {
    for (let i=0; i < array.length; i++) {
        let minimum = {
            number: array[i],
            index: i
        }
        for (let l=i+1; l < array.length; l++) {
            if (array[l] < minimum.number) {
                minimum.number = array[l]
                minimum.index = l
            }
        }
        const prevMin = array[i]
        array[i] = minimum.number
        array[minimum.index] = prevMin
    }
    return array
}

export default selectionSort