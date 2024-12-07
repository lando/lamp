'use strict';

const _ = require('lodash');
const LandoMssql = require('./../node_modules/@lando/mssql/builders/mssql.js');

// Builder
module.exports = {
  name: 'lamp-mssql',
  parent: '_service',
  builder: (parent, config) => class LampMssql extends LandoMssql.builder(parent, LandoMssql.config) {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options), {services: _.set({}, options.name)});
    }
  },
};
