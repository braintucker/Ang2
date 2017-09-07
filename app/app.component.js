'use strict';

(function (app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template: '\n      <h1>Random Animal</h1>\n      <random-animal></random-animal>\n    '
  }).Class({
    constructor: function AppComponent() {}
  });
})(window.app || (window.app = {}));