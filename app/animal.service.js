"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var AnimalService = function () {
    function AnimalService() {
      _classCallCheck(this, AnimalService);

      this.animals = sampleAnimals;
    }

    //getRandomAnimal


    _createClass(AnimalService, [{
      key: "getRandomAnimal",
      value: function getRandomAnimal() {
        var randomIndex = Math.floor(Math.random() * this.animals.length);
        return this.animals[randomIndex];
      }

      //generateRandomAnimals

    }, {
      key: "generateRandomAnimals",
      value: function generateRandomAnimals(delay, callback) {
        var _this = this;

        callback(this.getRandomAnimal());
        setTimeout(function () {
          return callback(_this.getRandomAnimal());
        }, delay);
      }
    }]);

    return AnimalService;
  }();

  app.AnimalService = AnimalService;

  var sampleAnimals = [{
    "breed": "Tiger",
    "location": "N/A"
  }, {
    "breed": "Lions",
    "location": "N/A"
  }, {
    "breed": "Bears",
    "location": "N/A"
  }, {
    "breed": "Squirrel.",
    "location": "N/A"
  }, {
    "breed": "Humans",
    "location": "N/A"
  }];
})(window.app || (window.app = {}));