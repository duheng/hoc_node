
module.exports = {
  apps : [{
    name: 'Qunar',
    script: __dirname +'/bin/www',
    exec_mode: 'fork',
    instances:'4',
    autorestart: false,
    watch: false,
    max_memory_restart: '1G',
    error_file:'./logs/app-err.log',
    out_file: './logs/app-out.log',
    env: {
      PORT: '4209',
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: '4209',
      NODE_ENV: 'production'
    },
     merge_logs: true
  }]
};
