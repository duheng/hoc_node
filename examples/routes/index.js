var router = require('koa-router')();
const axios = require('axios')

router.get('/', async function (ctx, next) {
  axios.get('http://www.jianshu.com/shakespeare/v2/notes/c2a1aa2e2b14/book').then(res=>{
    console.log('data1--',res.data)
  })
  // axios.get('http://gateway.segmentfault.com/article/1190000038346994/related').then(res=>{
  //   console.log('data2--',res.data)
  // })
  ctx.body = {
    title: 'Qunar'
  };
})

module.exports = router;
