'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomAnimalComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _animal = require('./animal.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomAnimalComponent = exports.RandomAnimalComponent = (_dec = (0, _core.Component)({
  selector: 'random-animal',
  template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
}), _dec(_class = function RandomAnimalComponent(animalService) {
  var _this = this;

  _classCallCheck(this, RandomAnimalComponent);

  animalService.generateRandomAnimals(2000, function (animal) {
    return _this.animal = animal;
  });
}) || _class);
(0, _core.Inject)(_animal.AnimalService)(RandomAnimalComponent, null, 0);