const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'nw-shelter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nw-shelter-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nw-shelter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nw-shelter-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nw-shelter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nw-shelter-production'
  }
};

module.exports = config[env];
