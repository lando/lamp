'use strict';

const _ = require('lodash');
const landoMysql = require('./../node_modules/@lando/mysql/builders/mysql.js');

// Builder
module.exports = {
  name: 'lamp-mysql',
  parent: '_service',
  builder: (parent, config) => class LampMysql extends landoMysql.builder(parent, landoMysql.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
