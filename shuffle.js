function shuffle(originalArray) {
  var shuffledArray = [];
  var originalArrayLength = originalArray.length;

  while(shuffledArray.length < originalArrayLength) {

    var randomNumber = Math.floor(Math.random() * originalArray.length)
    var randomElement = originalArray[randomNumber];
    shuffledArray.push(randomElement);
    originalArray.splice(randomNumber,1);
  }
  return 'Here is your shuffled Array: ' + shuffledArray;
}


console.log(shuffle(['Kalen','Sina','Tara','Eleen','Kara','Dino','John']));
