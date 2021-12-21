'use strict';

// Modules
const _ = require('lodash');

/*
 * Build LAMP
 */
module.exports = {
  name: 'lamp',
  parent: '_lamp',
  config: {
    confSrc: __dirname,
    database: 'mysql',
    php: '7.4',
    via: 'apache',
    webroot: '.',
    xdebug: false,
  },
  builder: (parent, config) => class LandoLamp extends parent {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options));
    };
  },
};
