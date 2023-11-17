'use strict';

const _ = require('lodash');
const landoMariadb = require('./../node_modules/@lando/mariadb/builders/mariadb.js');

// Builder
module.exports = {
  name: 'lamp-mariadb',
  parent: '_service',
  builder: (parent, config) => class LampMariadb extends landoMariadb.builder(parent, landoMariadb.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
