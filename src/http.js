var http = require('http')

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

function proxyHttp(proxyOptions) {
    for(var element in proxyOptions){
        Object.defineProperty(http, element, descripterFun(http[element], proxyOptions[element]))
    }
}

 module.exports = proxyHttp;
