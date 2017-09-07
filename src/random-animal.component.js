(function(app) {
  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var AnimalService = app.AnimalService;

  @Component({
    selector: 'random-animal',
    template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
  })

  class RandomAnimalComponent {
    constructor(@Inject(AnimalService) animalService) {
      //arrows use the same 'this' as their enclosing function
      animalService.generateRandomAnimals(2000, (animal) => this.animal = animal);
  }
}



  app.RandomAnimalComponent = RandomAnimalComponent;

})(window.app || (window.app = {}));
