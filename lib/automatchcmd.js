const fs = require('fs')
const didyoumean = require('didyoumean')
const similarity = require('similarity') 

exports.addCmd = function(command, counter, _db) {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === command) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].total += counter
        fs.writeFileSync('./database/cmd.json', JSON.stringify(_db))
    } else {
        const datacmd = ({
             id: command,
             total: counter
        })
        _db.push(datacmd)
        fs.writeFileSync('./database/cmd.json', JSON.stringify(_db))
    }
}

exports.matchCmd = function(command, _db){
    const cmdAll = JSON.parse(_db);
    
    if (cmdAll == null) return
    did = didyoumean(command, cmdAll, 'id') 
    sim = similarity(command, did)    
    return { command: did, equality: sim }
}