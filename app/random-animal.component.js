'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var AnimalService = app.AnimalService;

  var RandomAnimalComponent = (_dec = Component({
    selector: 'random-animal',
    template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
  }), _dec(_class = function RandomAnimalComponent(animalService) {
    var _this = this;

    _classCallCheck(this, RandomAnimalComponent);

    //arrows use the same 'this' as their enclosing function
    animalService.generateRandomAnimals(2000, function (animal) {
      return _this.animal = animal;
    });
  }) || _class);
  Inject(AnimalService)(RandomAnimalComponent, null, 0);


  app.RandomAnimalComponent = RandomAnimalComponent;
})(window.app || (window.app = {}));