import { Component, Inject } from '@angular/core';
import { AnimalService } from './animal.service';

@Component({
  selector: 'random-animal',
  template: '<p><em>{{animal.breed}}</em> - {{animal.location}}</p>'
})
export class RandomAnimalComponent {

  constructor(@Inject(AnimalService) animalService) {
    animalService.generateRandomAnimals(2000, animal => this.animal = animal);
  }

}
