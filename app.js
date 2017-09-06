(function() {

  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var AnimalService = Class({
    constructor: function AnimalService(){

        this.animals = sampleAnimals;
    },
    getRandomAnimal: function() {
      var randomIndex = Math.floor(Math.random() * this.animals.length);
      return this.animals[randomIndex];
    },
    generateRandomAnimals: function(delay, callback){
      var self = this;
      callback(this.getRandomAnimal());
      setTimeout(function(){
        callback(self.getRandomAnimal());
      }, delay);
    }
  });

  var RandomAnimalComponent = Component({
    selector: 'random-animal',
    template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
  })
  .Class({
    constructor: [AnimalService, function RandomAnimalComponent(animalService) {
      var self = this;
      animalService.generateRandomAnimals(2000, function(animal){
        self.animal = animal;
      });
    }]
  });

  var AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Random Animal</h1>' +
      '<random-animal></random-animal>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomAnimalComponent],
    providers: [AnimalService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

  var sampleAnimals = [
    {
      "breed": "Tiger",
      "location": "N/A"
    },
    {
      "breed": "Lions",
      "location": "N/A"
    },
    {
      "breed": "Bears",
      "location": "N/A"
    },
    {
      "breed": "Squirrel",
      "location": "N/A"
    },
    {
      "breed": "Humans",
      "location": "N/A"
    }
  ];

})();
