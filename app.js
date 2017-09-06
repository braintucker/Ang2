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
    }
  });

  var RandomAnimalComponent = Component({
    selector: 'random-animal',
    template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
  })
  .Class({
    constructor: [AnimalService, function RandomQuoteComponent(animalService) {
      this.animal = animalService.getRandomAnimal();
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
      "location": "Brian W. Kernighan"
    },
    {
      "breed": "Lions",
      "location": "Edward V Berard"
    },
    {
      "breed": "Bears",
      "location": "Hofstadter's Law"
    },
    {
      "breed": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "location": "Rick Osborne"
    },
    {
      "breed": "In theory, there is no difference between theory and practice. But, in practice, there is.",
      "location": "Jan L. A. van de Snepscheut"
    },
    {
      "breed": "Measuring programming progress by breeds of code is like measuring aircraft building progress by weight.",
      "location": "Bill Gates"
    },
    {
      "breed": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
      "location": "Leon Bambrick"
    },
    {
      "breed": "Nine people can't make a baby in a month.",
      "location": "Fred Brooks"
    },
    {
      "breed": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "location": "Edsger Dijkstra"
    },
    {
      "breed": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "location": "Tom Cargill"
    }
  ];

})();
