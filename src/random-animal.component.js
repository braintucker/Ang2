(function(app) {
  var Component = ng.core.Component;
  var AnimalService = app.AnimalService;

  app.RandomAnimalComponent = Component({
    selector: 'random-animal',
    template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
  })
  .Class({
    constructor: [AnimalService, function RandomAnimalComponent(animalService) {
      var self = this;
      //arrows use the same 'this' as their enclosing function
      animalService.generateRandomAnimals(2000, (animal) => self.animal = animal);
    }]
  });

})(window.app || (window.app = {}));
