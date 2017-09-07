(function(app) {
  var Component = ng.core.Component;

  @Component({
    selector: 'my-app',
    template:`
      <h1>Random Animal</h1>
      <random-animal></random-animal>
    `
  })
  class AppComponent { }

  //adds meta data to the class
  app.AppComponent = AppComponent;

})(window.app || (window.app = {}));
