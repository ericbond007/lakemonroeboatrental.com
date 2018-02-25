module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'lmbr',
      script    : 'server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: '3000',
      }
    },

    // Second application
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ubuntu',
      key  : '/home/eric/ebondawskey.pem',
      host : 'ec2-54-89-228-69.compute-1.amazonaws.com',
      ref  : 'origin/master',
      repo : 'git@github.com:ericbond007/lakemonroeboatrental.com.git',
      path : '/home/ubuntu/apps/lmbr.com',
      'ssh_options': 'ForwardAgent=yes',
      'pre-deploy': 'yarn && yarn build',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
