/**
© Created by Kotori Team
Under license CloudbyPsn 
*/

//Module
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

//Function
const act = async (client) => {
	
  //Send Message Connected To Owners
   owner.forEach((parseOwner) => {
       client.sendMessage(parseOwner.id + '@s.whatsapp.net', { text: 'Checking for updates from github...' })
   }) 
   //Send Message To Group Team
  groupTeam.forEach((parseGroup) => {
     client.sendMessage(parseGroup, { text: 'Checking for updates from github...' })
  })
  
  let o
  try {
      o = await exec('git pull')
  } catch (e) {
      o = e
  } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) {
          //Send Message Connected To Owners
          owner.forEach((parseOwner) => {
             client.sendMessage(parseOwner.id + '@s.whatsapp.net', { text: stdout })
           }) 
          //Send Message To Group Team
         groupTeam.forEach((parseGroup) => {
            client.sendMessage(parseGroup, { text: stdout })
         })
      }
      if (stderr.trim()) {
          //Send Message Connected To Owners
          owner.forEach((parseOwner) => {
             client.sendMessage(parseOwner.id + '@s.whatsapp.net', { text: stderr })
           }) 
          //Send Message To Group Team
         groupTeam.forEach((parseGroup) => {
            client.sendMessage(parseGroup, { text: stderr })
         })
      }
  }
}

module.exports = act