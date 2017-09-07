(function(app) {

  class AnimalService {

    constructor() {
      this.animals = sampleAnimals;
    }

    //getRandomAnimal
    getRandomAnimal() {
      var randomIndex = Math.floor(Math.random() * this.animals.length);
      return this.animals[randomIndex];
    }

    //generateRandomAnimals
    generateRandomAnimals(delay, callback) {
      callback(this.getRandomAnimal());
      setTimeout(() => callback(this.getRandomAnimal()), delay);
    }
  }



  app.AnimalService = AnimalService;

  var sampleAnimals = [
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

})(window.app || (window.app = {}));
