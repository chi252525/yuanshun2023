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
      "sit": {
        "user": "chuenningyeh", //linux 登入帳號 帳號@ip
        "host": ["35.221.131.221"], //你的伺服器 ip
        "ref": "origin/master", //分支
        "repo": "git@gitlab.com:yuanshun/yuanshun2023.git", //ssh 的 git
        "path": "/home/yuanshun2023/yuanshun2023", //伺服器上的路徑
        "post-deploy":
          "npm install && npm run build_SIT && pm2 reload ecosystem.config.js --env sit", //佈署指令
        "env"  : {
          "NODE_ENV": "sit"
        }
      }
    }

};
