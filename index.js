/** 
 * Based on the koa
 * Create a static server
 * Author By Aning
 * On May 24, 2018.
 */
const fs = require('fs')
const path = require('path')

let statics = (entry) => {
  return async (ctx) => {
    let filelist = ''
    let nowUrl = path.join(entry, ctx.path)
    // The space is decoded to %20
    nowUrl = decodeURI(nowUrl)  
    // ico Bad request
    if(path.extname(nowUrl) === '.ico'){ return false }

    if(fs.statSync(nowUrl).isDirectory()) {
      let sonArr = fs.readdirSync(path.join(nowUrl))
      ctx.body = await new Promise((resolve, reject) => {
        for(sonUrl of sonArr){
          let oldname = sonUrl
          // Space transcode %20
          sonUrl = encodeURI(sonUrl)  
          // The backslash is replaced by the slash.
          let url = path.join(ctx.path, sonUrl).replace(/\\/g, '/')
          filelist += `<li style="margin:5px 0; font-size=14px;">
                        <a href=${url}>${oldname}</a>
                      </li>`
        }
        resolve(filelist)
      })
    }else{
      ctx.type = path.extname(ctx.path)
      ctx.body = await fs.createReadStream(nowUrl)
    }
  }
}

module.exports = statics
  
