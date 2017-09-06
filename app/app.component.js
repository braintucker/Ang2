(function(app) {
  var Component = ng.core.Component;


  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Random Animal</h1>' +
      '<random-animal></random-animal>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
