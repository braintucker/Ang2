export class AnimalService {

  constructor() {
    this.animals = sampleAnimals;
  }

  getRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * this.animals.length);
    return this.animals[randomIndex];
  }

  generateRandomAnimals(delay, callback) {
    callback(this.getRandomAnimal());
    setTimeout(() => callback(this.getRandomAnimal()), delay);
  }

}


const sampleAnimals = [
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
