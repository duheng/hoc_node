var https = require('https')

function descripterFun(value, proxyOptions) {
  return {
      get: function () {
        return function(optios,fn) {
            var __optios = proxyOptions(optios)
            return value(__optios,fn)
        }
      },
      set: function (newvalue) {
          value = newvalue;
      }
  }
}


function proxyHttps(proxyOptions) {
    for(var element in proxyOptions){
        Object.defineProperty(https, element, descripterFun(https[element], proxyOptions[element]))
    }
  
}
 module.exports = proxyHttps;
