// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of 
// seconds in those hours. 
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

function secondInHours (hours) {
  let second = hours*3600
  return second
}
// console.log(secondInHours(3))

// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function milesTravelled(mph, minute_duration) {
  let distance_travelled = mph/60 * minute_duration
  return Math.ceil(distance_travelled)
}

// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles. 
// For this task assume there are exactly 1.6 kilometers in a mile. The returned 
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function kmToMiles(km) {
  let miles = Math.round(km /1.6)
  return miles
}

// MakeSentence
//
// Create a function that takes a string and returns the same string with the 
// first letter capitalized and a full stop added on to the end. If the string 
// already ends with a full stop, question mark (?) or an exclamation mark(!) 
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function makeSentence(sentence) {
  if (sentence.charAt(sentence.length-1) === "." || sentence.charAt(sentence.length-1) === "!" || sentence.charAt(sentence.length-1) === "?") {
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
    return sentence
  }
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + "."
  return sentence
}

// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function fileExtension(fileName) {
  // for (i= 0; i < fileName.length; i++) {
    console.log(fileName.charAt(fileName.length-4))
    if (fileName.charAt(fileName.length-4) === ".") {
      return fileExtension = fileName.slice(fileName.length-3)
    }
  // }
  return fileExtension = ""
}

// Range
//
// Create a function that takes an array of numbers and returns the difference 
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function range (numArray) {
  let highestNumber = numArray[0]
  let lowestNumber = numArray[0]
  for (i=0; i < numArray.length; i++) {
    if (numArray[i] > highestNumber) {
      highestNumber = numArray[i] 
    }
    if (numArray[i] < lowestNumber) {
      lowestNumber = numArray[i] 
    } 
  }
  biggestNumberGap = highestNumber - lowestNumber
  return biggestNumberGap
}

// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for 
// a given account. 
//
// The function should accept 3 arguments. The first is an array containing a 
// list of transactions to apply to the account balance. Positive numbers are 
// deposits and negative numbers are withdrawals. The second argument is the 
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function checkTransactions(listOfTransactions, accountStartingBalance, accountOverdraft) {
  let canGoOnWithTransaction = true
  let thisIsHowMuchYouCanSpend = accountStartingBalance + accountOverdraft
  for (i=0; i<(listOfTransactions.length) && canGoOnWithTransaction === true; i++) {
    if (listOfTransactions[i] >= 0) {
      thisIsHowMuchYouCanSpend = thisIsHowMuchYouCanSpend + listOfTransactions[i]
    } else if (listOfTransactions[i] < 0 && thisIsHowMuchYouCanSpend >= Math.abs(listOfTransactions[i])) {
      thisIsHowMuchYouCanSpend = thisIsHowMuchYouCanSpend + listOfTransactions[i]
    } else {
      return canGoOnWithTransaction = false
    }
  }
  return canGoOnWithTransaction
}

// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a 
// `name` key that contains the film name and a 'genre' key that contains an array 
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function filmInGenre(movies, genre) {
  const result = []
  for ( let i = 0; i < movies.length; i++ ) {
    const movie = movies[i]
    if ( movie.genres.includes(genre) ) {
        result.push(movie.name)
    }
}
return result
}








// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: secondInHours,

  //MilesTravelled,
  b: milesTravelled,  

  //KilometersToMiles,
  c: kmToMiles, 

  //MakeSentence
  d: makeSentence, 

  //FileExtension
  e: fileExtension,

  //Range
  f: range,

  //CheckTransactions
  g: checkTransactions,

  //FilmsInGenre
  h: filmInGenre,
}
