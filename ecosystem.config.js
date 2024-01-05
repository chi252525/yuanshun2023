module.exports = {
  apps: [{
    name: 'yuanshun2023',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    instance: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3001,
    env_prod: {
      name: 'yuanshun2023_prod',
      PORT: 3001, //指定伺服器上的 port
      NODE_ENV: "prod"
    },
    env_sit: {
      "name": 'yuanshun2023_sit',
      "PORT": 3002, //指定伺服器上的 port
      "NODE_ENV": "sit"
    }

  }],
    deploy: {
      "prod": {
        "user": "yuanshun2023", //linux 登入帳號 帳號@ip
        "host": ["34.80.127.136"], //你的伺服器 ip
        "ref": "origin/master", //分支
        "repo": "git@gitlab.com:yuanshun/yuanshun2023.git", //ssh 的 git
        "path": "/home/yuanshun2023/yuanshun2023", //伺服器上的路徑
        "post-deploy":
          "nvm use v20.9.0 &&npm install --ignore-scripts && npm run build && pm2 reload ecosystem.config.js --env prod --only yuanshun2023_prod", //佈署指令
        "env"  : {
          "NODE_ENV": "prod"
        }
      }
    }

};
