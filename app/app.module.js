"use strict";

(function (app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var AnimalService = app.AnimalService;
  var RandomAnimalComponent = app.RandomAnimalComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomAnimalComponent],
    providers: [AnimalService],
    bootstrap: [AppComponent]
  }).Class({
    constructor: function constructor() {}
  });
})(window.app || (window.app = {}));