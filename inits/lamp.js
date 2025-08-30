'use strict';

/*
 * Init Lamp
 */
module.exports = {
  name: 'lamp',
  defaults: {
    via: 'apache',
    php: '7.4',
    database: 'mysql',
    webroot: '.',
    xdebug: false,
  },
};
