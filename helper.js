

function isAvailable(value) {
    return value.status == 'available'
}

module.exports = { isAvailable }