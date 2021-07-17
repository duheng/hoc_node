var {proxyHttp,proxyHttps} = require('../src/index')
proxyHttp({
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


// let http = require('http')
// function descripterFun(element, value) {
//   return {
//       get: function () {
//         if(element == 'request') {
//           return function(optios,fn) {
//             console.log('get it',arguments);
//             return value(optios,fn)
//           }
//         }
//         return value;
//       },
//       set: function (newvalue) {
//           console.log('set it');
//           value = newvalue;
//       }
//   }
// }

// for(var i in http){
//   Object.defineProperty(http, i, descripterFun(i,http[i]))
// }
// const FFF = http.request
// http.request = function() {
//   var args = [].slice.call(arguments);


  // var s = '';

  // for(var i in args) {
  //   if( args[i] == '[object Object]'){
  //     s += args[i].toString() + ",";
  //   }
  //   s += args[i] + ",";
  // }
//   arguments[0].hostname = 'www.baidu.com'
//   arguments[0].path = '/'
//   arguments[0].pathname = '/'
//   console.log('optios--',arguments[0] )
//   return FFF(...arguments)
// }

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const index = require('./routes/index');

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(require('koa-static')(__dirname + '/public')));

app.use(views(__dirname + '/views-ejs', {
  extension: 'ejs'
}));

router.use('/', index.routes(), index.allowedMethods());


app.use(router.routes(), router.allowedMethods());

module.exports = app;
