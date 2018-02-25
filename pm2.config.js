module.exports = {
  apps : [
    {
      name: "lmbr",
      script: "server/index.js",
      watch: true,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 3000,
        "NODE_ENV": "production",
      }
    }
  ]
}
