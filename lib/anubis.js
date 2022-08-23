/**
   * Create By anubiskun.
   * Contact Me on mailto://anubiskun.xyz@gmail.com
   * Follow https://github.com/anubiskun
*/

const Pageres = require('pageres')
const fs = require('fs')
const { TelegraPh } = require('./uploader')

module.exports = {
    ssweb(url) {
        return new Promise(async (resolve, reject) => {
            let a = await new Pageres({
              delay: 2,
              launchOptions: {
                args: [
                  '--no-sandbox',
                  '--disable-setuid-sandbox'
                ]
              }
            })
            .src(url, [`720x1200`], {crop: false})
            .dest('./src')
            .run();
            let b = await TelegraPh('./src/'+ a[0].filename)
            await fs.promises.readFile('./src/'+ a[0].filename)
            await fs.promises.unlink('./src/'+ a[0].filename)
            return resolve(b)
        })
      }
}