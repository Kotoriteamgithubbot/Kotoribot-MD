/**
 * Handle Session
 * Create By Natia Shalsabilla
 */

const { 
  proto,
  initAuthCreds,
  BufferJSON
} = require('baileys');

exports.useJsonAuthState = () => {
    // Save the authentication state to a JSON
    const saveCreds = () => {
      console.log('Saving auth state in JSON!') 
      global.db.session = JSON.stringify({ creds, keys }, BufferJSON.replacer, 2) // BufferJSON replacer utility saves buffers nicely
    }

    var creds
    if (global.db?.session) {
      const result = JSON.parse(global.db.session, BufferJSON.reviver)
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
