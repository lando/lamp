'use strict';

const _ = require('lodash');
const landoMongo = require('./../node_modules/@lando/mongo/builders/mongo.js');

// Builder
module.exports = {
  name: 'lamp-mongo',
  parent: '_service',
  builder: (parent, config) => class LampMongo extends landoMongo.builder(parent, landoMongo.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
