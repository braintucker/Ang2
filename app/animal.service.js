System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalService, sampleAnimals;
    return {
        setters:[],
        execute: function() {
            AnimalService = (function () {
                function AnimalService() {
                    this.animals = sampleAnimals;
                }
                AnimalService.prototype.getRandomAnimal = function () {
                    var randomIndex = Math.floor(Math.random() * this.animals.length);
                    return this.animals[randomIndex];
                };
                AnimalService.prototype.generateRandomAnimals = function (delay, callback) {
                    var _this = this;
                    callback(this.getRandomAnimal());
                    setTimeout(function () { return callback(_this.getRandomAnimal()); }, delay);
                };
                return AnimalService;
            }());
            exports_1("AnimalService", AnimalService);
            sampleAnimals = [
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
                    "breed": "Squirrel.",
                    "location": "N/A"
                },
                {
                    "breed": "Humans",
                    "location": "N/A"
                }
            ];
        }
    }
});
