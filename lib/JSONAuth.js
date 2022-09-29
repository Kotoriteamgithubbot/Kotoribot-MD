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

    if (db.data.session != null) {
      var fixSession
      try {
        fixSession = JSON.parse(db.data.session, BufferJSON.reviver)
      } catch {
        prepareSession = JSON.stringify(db.data.session)
        fixSession = JSON.parse(prepareSession, BufferJSON.reviver)
      }
      const result = fixSession
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
