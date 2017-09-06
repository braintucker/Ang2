(function(app) {
  var Class = ng.core.Class;

  app.AnimalService = Class({
    constructor: function AnimalService(){

        this.animals = sampleAnimals;
    },
    getRandomAnimal: function() {
      var randomIndex = Math.floor(Math.random() * this.animals.length);
      return this.animals[randomIndex];
    },
    generateRandomAnimals: function(delay, callback){
      var self = this;
      callback(this.getRandomAnimal());
      setTimeout(function(){
        callback(self.getRandomAnimal());
      }, delay);
    }
  });


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
      "breed": "Squirrel",
      "location": "N/A"
    },
    {
      "breed": "Humans",
      "location": "N/A"
    }
  ];

})(window.app || (window.app = {}));
