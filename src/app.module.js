(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var AnimalService = app.AnimalService;
  var RandomAnimalComponent = app.RandomAnimalComponent;
  var AppComponent = app.AppComponent;

  @NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomAnimalComponent],
    providers: [AnimalService],
    bootstrap: [AppComponent]
  })

  class AppModule { }


  app.AppModule = AppModule;

})(window.app || (window.app = {}));
