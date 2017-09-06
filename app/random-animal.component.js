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
      animalService.generateRandomAnimals(2000, function(animal){
        self.animal = animal;
      });
    }]
  });

})(window.app || (window.app = {}));
