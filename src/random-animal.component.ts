import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';

@Component({
  selector: 'random-animal',
  template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
})
export class RandomAnimalComponent {

  animal: Animal;

  constructor(animalService: AnimalService) {
    animalService.generateRandomAnimals(2000, animal => this.animal = animal);
  }

}
