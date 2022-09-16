/**
© Created by Kotori Team
Under license CloudbyPsn 
*/

//Function
const notify = async (client, text) => {
	
    //Send Message To Owners
    owner.forEach((parseOwner) => {
         client.sendMessage(parseOwner.id + '@s.whatsapp.net', { text: text })
    }) 

    //Send Message To Group Team
    groupTeam.forEach((parseGroup) => {
        client.sendMessage(parseGroup, { text: text })
    })

}

module.exports = notify
