System.register(['@angular/core', './animal.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animal_service_1;
    var RandomAnimalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animal_service_1_1) {
                animal_service_1 = animal_service_1_1;
            }],
        execute: function() {
            RandomAnimalComponent = (function () {
                function RandomAnimalComponent(animalService) {
                    var _this = this;
                    animalService.generateRandomAnimals(2000, function (animal) { return _this.animal = animal; });
                }
                RandomAnimalComponent = __decorate([
                    core_1.Component({
                        selector: 'random-animal',
                        template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
                    }), 
                    __metadata('design:paramtypes', [animal_service_1.AnimalService])
                ], RandomAnimalComponent);
                return RandomAnimalComponent;
            }());
            exports_1("RandomAnimalComponent", RandomAnimalComponent);
        }
    }
});
