/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-animo',
  included: function (app) {
    app.import(app.bowerDirectory + "/animo.js/animo.js");
  }
};
