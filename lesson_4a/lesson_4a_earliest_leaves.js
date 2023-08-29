function earliestLeaves(desiredPosition, time) {
    const positions = {}
    let maxTime = -1
    for (let t = 0; t < time.length; t++) {
        if (time[t] <= desiredPosition && !positions[time[t]]) {
            positions[time[t]] = t 
            maxTime = time[t]
        }
    }
    const positionsLength = Object.keys(positions).length
    return positions[maxTime] !== undefined && positionsLength === desiredPosition ? positions[maxTime] : -1
}

module.exports = earliestLeaves