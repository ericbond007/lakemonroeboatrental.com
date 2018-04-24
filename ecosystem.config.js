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
      'pre-deploy': 'yarn',
      'post-deploy' : 'yarn build && pm2 startOrRestart ecosystem.config.js --env production'
    },
    dev : {
      user : 'eric',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:ericbond007/lakemonroeboatrental.com.git',
      path : '/home/eric/apps/lmbr.com',
      'pre-deploy': 'yarn',
      'post-deploy' : 'yarn build && pm2 startOrRestart ecosystem.config.js --env production'
      env  : {
        NODE_ENV: 'production'
      }
    }
  }
};
