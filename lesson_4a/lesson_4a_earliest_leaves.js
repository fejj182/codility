function earliestLeaves(desiredPosition, leaves) {
    const positions = {}
    let missingPosition;
    for (let l = 1; l <= desiredPosition; l++) {
        const foundPosition = leaves.findIndex((leaf) => leaf === l)
        if (foundPosition > -1) {
            positions[l] = foundPosition
        } else {
            missingPosition = true
        }
    }
    return !missingPosition ? Math.max(...Object.values(positions)) : -1
}

module.exports = earliestLeaves