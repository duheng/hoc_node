const CWD = process.cwd();
module.exports = {
  name: 'pf_qtrace_node_simpe',         // 这是你申请的appCode
  token: 'wjaQ/1i+sJQKQv/3Nvfk2LYTiLpn52tVJCT0A8V5sk0rxLtbAbH0bT1Ak5e/kqRGvq5GHPsmKPRV3w6d2U' ,
  autoTrace: true,                         // 如果开启自动探测，则trace中间件会自动劫持并收集所有路由过来的信息。（如果你只需要记录一个简单版本trace信息可以用这个）
  backup: true,                           // 是否需要备份
  backupDate: 1,    // 备份时间间隔，默认60分钟
  memoryLimit:100,   
  logCaheLimit: 60,                  
  maxLogSize : 500,                         //
  logFile: `${CWD}/logs/qtracer.span.log`,      // trace日志地址，qtracer.span.log文件名禁止修改，否则数据组抓取不到
  logErrorFile: `${CWD}/logs/qtracer.error.log`,// trace错误日志地址
  backupDir: `${CWD}/logs/backup`,               // trace日志备份地址
  delBackUpTime: 3, // 自动清理过期备份日志时间，默认3小时
  ignoreUrl: []
}
