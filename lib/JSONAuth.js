/**
 * Handle Session
 * Create By Natia Shalsabilla
 */

const { 
  proto,
  initAuthCreds,
  BufferJSON
} = require('baileys');
const fs = require('fs-extra');

exports.useJsonAuthState = () => {
    // Save the authentication state to a JSON
    const saveCreds = () => {
      console.log('Saving auth state in JSON!') 
      db.data.session = JSON.stringify({ creds, keys }, BufferJSON.replacer, 2)
    }
    
    //Only single session
    if (fs.existsSync('session.json') && !db.data.session) {
      db.data.session = fs.readFileSync('./session.json', { encoding: 'utf-8' })
      if (typeof db.data.session == 'string') fs.unlinkSync('./session.json')
    } else if (typeof db.data.session == 'string' && fs.existsSync('./session.json')) {
      fs.unlinkSync('./session.json')
    }

    if (db.data.session != null) {
      const result = JSON.parse(db.data.session, BufferJSON.reviver)
      creds = result.creds
      keys = result.keys
    } else {
      creds = initAuthCreds()
      keys = { }
    }

    return {
      state: {
        creds,
        keys: {
	  get: (type, ids) => {
	    return ids.reduce((dict, id) => {
	      let value = keys[type]?.[id]
	        if (value) {
		  if (type === 'app-state-sync-key') {
		    value = proto.Message.AppStateSyncKeyData.fromObject(value)
		  }
                  dict[id] = value
		}
                return dict
	     }, { })
	  },
	  set: (data) => {
	    for (const _key in data) {
	       keys[type] = keys[_key] || { }
	       Object.assign(keys[_key], data[_key])
       	    }
            saveCreds()
	  }
        }
      },
      saveCreds
    }
}
