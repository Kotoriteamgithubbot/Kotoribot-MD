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
      db.data.session = { creds, keys }
    if (db.data.session != null) {
      const result = db.data.session
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
