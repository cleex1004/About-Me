'use strict';

var userName = prompt('Welcome and Good Day! What is your name?');
alert('Nice to meet you ' + userName + '! Let\'s play a game so you can find out more about me. Please answer the following questions with a yes or a no.');
console.log('User\'s name is ' + userName);

var count = 0;

//first question
function questionOne() {
  var music = prompt('I like music alot in general, do you think that I like KPOP?').toUpperCase();

  if (music === 'YES' || music === 'Y') {
    alert('Of course I like KPOP! It\'s the greatest thing ever.');
    console.log(music + ', ' + userName + ' thinks I like KPOP.');
    count++;
  }
  else {
    alert('Sorry, you\'re wrong' + userName + '. I don\'t just like KPOP, I love it.');
    console.log(music + ', ' + userName + ' does not think I like KPOP.');
  }
}

//second question
function questionTwo() {
  var bigBang = prompt('Big Bang is the best and most popular KPOP boyband ever. Do you think I like them?').toUpperCase();

  if (bigBang === 'YES' || bigBang === 'Y') {
    alert('You\'re right ' + userName + '. I do like them, I\'ve even seen them in concert 4 times!');
    console.log(bigBang + ', ' + userName + ' thinks I like Big Bang.');
    count++;
  }
  else {
    alert(userName + ', have you been paying attention? I said they were the best, don\'t you think that means I like them.');
    console.log(bigBang + ', ' + userName + ' does not think I like Big Bang.');
  }
}

//third question
function questionThree() {
  var dog = prompt('Besides music I really like dogs, almost more than people. Do you agree dogs are better than people?').toUpperCase();

  if (dog === 'YES' || dog === 'Y') {
    alert('I totally agree with you! Dogs are the best!');
    console.log(dog + ' ' + userName + ' thinks dogs are better than people.');
    count++;
  }
  else {
    alert('Well ' + userName + ', you must know some pretty cool people, good for you. Dogs are still better.');
    console.log(dog + ' ' + userName + ' does not think dogs are better than people.');
  }
}

//fourth question
function questionFour() {
  var cat = prompt('Now that we have concluded that dogs are pretty awesome, I want your opinion about cats. I think they\'re kind of weird. Do you agree with me?').toUpperCase();

  if (cat === 'YES' || cat === 'Y') {
    alert('Yaas!!! Cats don\'t listen to their hoomans and are in their own little world. Why would you want a creature in your house that doesn\'t respond to you!');
    console.log(cat + ' ' + userName + ' agrees that cats are weird.');
    count++;
  }
  else {
    alert('Well you\'re pretty weird. I think you need to spend more time with dogs and then you will realize cats are weird.');
    console.log(cat + ' ' + userName + ' does not agree that cats are weird.');
  }
}

//fifth question
function questionFive() {
  var moreGames = prompt ('I\'ve had fun playing with you so far and I hope you have gotten to know me better. Would you be interested in playing more games with me?').toUpperCase();

  if (moreGames === 'YES' || moreGames === 'Y') {
    alert('Cool! Let\'s do that.');
    console.log(moreGames + ' ' + userName + ' does want to play more games.');
    count++;
  }
  else {
    alert('How rude. Too bad, this isn\'t over yet.');
    console.log(moreGames + ' ' + userName + ' does not want to play more games.');
  }
}

//sixth question
function questionSix() {
  alert('Now that you have learned a little bit about me let\'s try some harder questions.');

  for (var index = 0; index < 4; index++) {
    var age = prompt ('How old do you think I am?');

    if (parseInt(age) === 30) {
      alert('You got it! I\'m ' + age + '.');
      console.log(userName + ' has correctly guessed age as ' + age + '.');
      index = 4;
      count++;
    }
    else if (age < 30) {
      alert('I\'m older than ' + age + ', but thanks for the compliment!');
      console.log(userName + ' guessed age as too low at ' + age + '.');
    }
    else if (age > 30) {
      alert('I\'m younger than ' + age + ', do I really look that old?');
      console.log(userName + ' guessed age as too high at ' + age + '.');
    }
  }
}

//seventh question
function questionSeven() {
  var favoritePlaces = ['DC', 'VENICE', 'MELBOURNE', 'PARIS', 'SEOUL', 'SYDNEY', 'NEW YORK', 'DUBAI', 'LONDON'];

  for (var indey = 0; indey < 6; indey++) {
    var place = prompt('Where is my favorite place in the world?').toUpperCase();
    var placeslength = favoritePlaces.length;

    for (var indez = 0; indez < placeslength; indez++) {
      if (place === favoritePlaces[indez]) {
        alert('That is one of my favorite places, I love it there!');
        console.log(userName + ' correctly guessed ' + place + ' as one of my favorite places.');
        alert('These are all of my favorite places. ' + favoritePlaces.join(', ') + '.');
        indey = 6;
        count++;
      }
    }
    if (indey < 6) {
      alert('Nope, thats not it. Sorry.');
      console.log(userName + ' incorrectly guessed ' + place + ' as one of my favorite places.');
    }
  }
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

//tally
alert(userName + ', you got ' + count + ' out of 7 answers correct.');
console.log(userName + ' got ' + count + ' out of 7 answers correct.');
