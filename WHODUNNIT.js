
//Epsidoe 1
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
//print name should print out 'My name is Bob'


//Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
//result should print out 3 as 3 is the local variable to the function


//Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//list animals should print out the number of the animal in the array and then the animal


//Episode 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//suspect 3 should be Colin as it is defined in the all suspects function


//Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
//it will print out Poirot after as its the local variable from the detectiveInfo function


// Episode 6
var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// the murderer will be Rick as even though the function is called above the function and Morty on the outerfunction is local to the function
