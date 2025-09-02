'use strict';

const path = require('path');
const landoPhpPath = path.join(__dirname, '../node_modules/@lando/php');
const LandoPhp = require(`${landoPhpPath}/builders/php.js`);

/**
 * Lamp PHP builder class that extends Lando PHP builder.
 * Uses the bundled version of @lando/php plugin instead of user's version.
 *
 * @module lamp-php
 */
module.exports = {
  name: 'lamp-php',
  parent: '_appserver',
  /**
   * Builder function that returns the LampPhp class
   * @param {Object} parent - Parent builder class
   * @return {Class} LampPhp class extending LandoPhp builder
   */
  builder: parent => class LampPhp extends LandoPhp.builder(parent, LandoPhp.config) {
    /**
     * Create a new LampPhp instance
     * @param {string} id - Service id
     * @param {Object} options - Service options
     * @param {Object} factory - App factory instance
     */
    constructor(id, options = {}, factory) {
      options.nginxServiceType = 'lamp-nginx';
      super(id, options, factory);
    }
  },
};
