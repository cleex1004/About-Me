'use strict';

var userName = prompt('Welcome and Good Day! What is your name?');
alert('Nice to meet you ' + userName + '! Let\'s play a game so you can find out more about me. Please answer the following questions with a yes or a no.');

//first question
var music = prompt('I like music alot, especially KPOP. Have you ever heard of KPOP?').toUpperCase();

if (music === 'YES' || music === 'Y') {
  alert('Awesome! You are my new bestfriend, let\'s talk about how awesome Big Bang is.');
}
else {
  alert('You are seriously missing out, it\'s the greatest ever and super addicting. Let me tell you more about Big Bang.');
}

//second question
var bigBang = prompt('Big Bang is my favorite KPOP boyband. Do you want to listen to their latest song? It\'s really, really, good!').toUpperCase();

if (bigBang === 'YES' || bigBang === 'Y') {
  alert('Good choice ' + userName + '. Here\'s the address to their MV in Youtube. Hope you like it! https://youtu.be/iIPH8LFYFRk');
}
else {
  alert(userName + ', you should be more open minded. Here\'s the address to their MV in Youtube anyway because it\'s worth checking out. https://youtu.be/iIPH8LFYFRk');
}

//third question
var dog = prompt('Besides music I really like dogs, almost more than people. Do you think dogs are better than people?').toUpperCase();

if (dog === 'YES' || dog === 'Y') {
  alert('I totally agree with you! Dogs are the best!');
}
else {
  alert('Well ' + userName + ', you must know some pretty cool people, good for you. Dogs are still better.');
}

//fourth question
var cat = prompt('Now that we have concluded that dogs are pretty awesome, I want your opinion about cats. I think they\'re kind of weird. Do you agree with me?').toUpperCase();

if (cat === 'YES' || cat === 'Y') {
  alert('Yaas!!! Cats don\'t listen to their hoomans and are in their own little world. Why would you want a creature in your house that doesn\'t respond to you!');
}
else {
  alert('Well you\'re pretty weird. I think you need to spend more time with dogs and then you will realize cats are weird.');
}

//fifth question
var moreGames = prompt ('I\'ve had fun playing with you and I hope you have gotten to know me better. Would you be interested in playing more games with me in the future?').toUpperCase();

if (moreGames === 'YES' || moreGames === 'Y') {
  alert('Cool! Let\'s do this again sometime!');
}
else {
  alert('How rude. Good Bye.');
}
