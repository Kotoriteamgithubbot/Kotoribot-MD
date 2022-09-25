const fs = require('fs')
const toMs = require('ms')
const { MessageType } = require("baileys");
const { sleep } = require("./function");


/**
 * Add Sewa group.
 * @param {String} gid 
 * @param {String} expired 
 * @param {Object} _db 
 */
const addSewaGroup = (gid, expired, _db) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _db.push(obj)
}

/**
 * Get sewa group position.
 * @param {String} gid 
 * @param {Object} _db 
 * @returns {Number}
 */
const getSewaPosition = (gid, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get sewa group expire.
 * @param {String} gid 
 * @param {Object} _db 
 * @returns {Number}
 */
const getSewaExpired = (gid, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _db[position].expired
    }
}

/**
 * Check group is sewa.
 * @param {String} groupId 
 * @param {Object} _db 
 * @returns {Boolean}
 */
const checkSewaGroup = (gid, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === gid) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking sewa.
 * @param {object} WAConnection
 * @param {Object} _db 
 */
const expiredCheck = (client, _db) => {
    setInterval(() => {
        let position = null
        Object.keys(_db).forEach((i) => {
            if (Date.now() >= _db[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_db[position].id}`)
            if (_db[position].status === true){
                    client.groupLeave(_db[position].id)
                    .then(() => {
                        _db.splice(position, 1)
                    })
            }
        }
    }, 1000)
}

module.exports = {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
}
