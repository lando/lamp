'use strict';

const _ = require('lodash');
const LandoMongo = require('./../node_modules/@lando/mongo/builders/mongo.js');

// Builder
module.exports = {
  name: 'lamp-mongo',
  parent: '_service',
  builder: (parent, config) => class LampMongo extends LandoMongo.builder(parent, LandoMongo.config) {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options), {services: _.set({}, options.name)});
    }
  },
};
