'use strict';

const _ = require('lodash');
const LandoPhp = require('./../node_modules/@lando/php/builders/php.js');

// Builder
module.exports = {
  name: 'lamp-php',
  parent: '_appserver',
  builder: (parent, config) => class LampPhp extends LandoPhp.builder(parent, LandoPhp.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
