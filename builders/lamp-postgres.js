'use strict';

const _ = require('lodash');
const landoPostgres = require('./../node_modules/@lando/postgres/builders/postgres.js');

// Builder
module.exports = {
  name: 'lamp-postgres',
  parent: '_service',
  builder: (parent, config) => class LampPostgres extends landoPostgres.builder(parent, landoPostgres.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
