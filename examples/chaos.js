var {proxyHttp,proxyHttps} = require('../src/index')
var ChaosServer = require('./chaos_service')
const server = new ChaosServer();
// start server
(async function(){
    await server.start();

})()

proxyHttp({
  request: function(optios) {
    //var __optios = 
    // if(optios.path.match('v2/notes')) {
    //   optios.path = '/api/v4/stickers?a=1&b=2'
    //   optios.hostname =  'www.zhihu.com'
    //   optios.pathname = '/api/v4/stickers',
    //   optios.search = '?a=1&b=2'
    // }
    if(optios.path.match('v2/notes')) {
       console.log('handlers-----',server.handlers)
        optios.port = '12580'
        optios.path = '/mozi'
        optios.hostname =  '127.0.0.1'
        optios.pathname = '/mozi',
        optios.search = '?a=1&b=2'
      }
    // https://www.jianshu.com/users/c971c7ffa27e/collections_and_notebooks?slug=c971c7ffa27e
   // console.log('mozi----',optios  )
      return optios
  },
  
})

proxyHttps({
  request: function(optios) {
    //var __optios = 
    if(optios.path.match('v2/notes')) {
      optios.path = '/api/v4/stickers?a=1&b=2'
      optios.hostname =  'www.zhihu.com'
      optios.pathname = '/api/v4/stickers',
      optios.search = '?a=1&b=2'
    }
    
    // https://www.jianshu.com/users/c971c7ffa27e/collections_and_notebooks?slug=c971c7ffa27e
   // console.log('mozi----',optios  )
      return optios
  }
})
