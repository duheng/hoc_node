
module.exports = {
  apps : [{
    name: 'Qunar1',
    script: __dirname +'/bin/www',
    exec_mode: 'fork',
    instances:'1',
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
  },
  {
    name: 'Qunar2',
    script: __dirname +'/bin/www',
    exec_mode: 'fork',
    instances:'1',
    autorestart: false,
    watch: false,
    max_memory_restart: '1G',
    error_file:'./logs/app-err.log',
    out_file: './logs/app-out.log',
    env: {
      PORT: '4208',
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: '4208',
      NODE_ENV: 'production'
    },
     merge_logs: true
  }]
};
