// let letters = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1,  "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, "x": 8, "z": 10}

// function scrabble(word){

//     let score = 0;
//     let wordLower = word.toLowerCase();

//     let wordArray = wordLower.split("");

//     console.log("Letter \t\t\t Value")
//     for (let i = 0; i < wordArray.length; i++) {
//         score += letters[wordArray[i]];

//         console.log(wordArray[i] + "\t\t\t\t\t" + letters[wordArray[i]]);
//     }//end for loop


//     return "Total Score = " + score;
// }//end funtion

// // function print(word){

// //     let score = 0
// //     let wordLower = word.toLowerCase();

// //     let wordArray = wordLower.split("");

// //     console.log("Letter \t\t\t\t Value")
// //     for (let i = 0; i < wordArray.length; i++) {
// //         score += letters[wordArray[i]];
// //         console.log(wordArray[i] + "\t\t\t\t" + score);
// //     }//end for loop  
// // }
////////////////////////////////////////

let letters = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5,
  L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4,
  W: 4, X: 8, Y: 4, Z: 10
};

function scrabble(word) {
  while (word.match(/[!@#$%&*()]/g) || word.match(/[0-9]/g)) {
    word = prompt("Please enter a valid word");
  }

  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += letters[word[i]];
  }
  return "Total Score = " + score;
}

var word = prompt("Please enter a word to score");
console.log(scrabble(word));