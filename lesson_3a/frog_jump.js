function frogJump(start, finish, distance) {
    if (finish < start) {
        throw Error("Finish has to be before start")
    }

    if (distance <= 0) {
        throw Error("Frog cannot reach")
    }

    const stepsNeeded = (finish - start) / distance

    return Math.ceil(stepsNeeded)
}

module.exports = frogJump