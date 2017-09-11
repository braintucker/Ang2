import { Animal } from './animal.model';
export class AnimalService {

  private animals: Animal[] = sampleAnimals;

  private getRandomAnimal(): Animal {
    const randomIndex = Math.floor(Math.random() * this.animals.length);
    return this.animals[randomIndex];
  }

  generateRandomAnimals(delay: number, callback: (animal: Animal) => void) {
    callback(this.getRandomAnimal());
    setTimeout(() => callback(this.getRandomAnimal()), delay);
  }

}

const sampleAnimals: Animal[] = [
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
