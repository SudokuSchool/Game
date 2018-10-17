var beginner = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

var moderate = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

var challenging = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

var difficult = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

var expert = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

var extreme = [
'016002400320009000040103000005000069009050300630000800000306010000400072004900680',
];

// var beginner = [
// fullHouse,
// hiddenSingle,
// nakedSingle
// ];

// var moderate = [
// HNPair,
// lockedCandidates
// ];

// var challenging = [
// HNTQ,
// x_Wing
// ];

// var difficult = [
// swordfish,
// jellyfish,
// xy_fxWing
// ];

// var expert = [
// Squirmbag,
// fsjFish,
// xyz_wxyzWing
// ];

// var extreme = [
// ALSXZFinnedSquirmbag
// ];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRamdomBoardFor(array) {
  var idx = randomIntFromInterval(0, array.length - 1);
  return array[idx];
}

var Boards = {
  randomBoard: function(difficulty) {
    switch (difficulty) {
      case 'Beginner':
        return getRamdomBoardFor(beginner);
      case 'Moderate':
        return getRamdomBoardFor(moderate);
      case 'Challenging':
        return getRamdomBoardFor(challenging);
      case 'Difficult':
        return getRamdomBoardFor(difficult);
      case 'Expert':
        return getRamdomBoardFor(expert);
      case 'Extreme':
        return getRamdomBoardFor(extreme);
    }
  }
}



/*

BEGINNER FUNCTIONS

function fullHouse() {
  
}

function hiddenSingle() {
  
}

function nakedSingle() {
  
}

 

Moderate: 
HNPair
lockedCandidates

Challenging: 
Hidden and Naked Triple and Quad
X-Wing

Difficult:
Swordfish
Jellyfish
XY-Wing and Finned X-Wing

Expert: 
Squirmbag
Finned Swordfish and Jellyfish (that also includes Fishy Cycle, Sashimi Fish and Turbot Fish)
XYZ-Wing and WXYZ-Wing

Extreme: ALS-XZ (Almost locked set) and Finned Squirmbag.

*/

module.exports = Boards;
