function reverse(originalArray) {
  var reverseArray = [];
  var originalArrayLength = originalArray.length;

   var randomNumber = Math.floor(Math.random() * originalArray.length)
   var randomElement = originalArray[randomNumber];
    shuffledArray.push(randomElement);
    originalArray.splice(randomNumber,1);

  return 'Here is your reverse Array: ' + reverseArray;
}


console.log(reverse(['Kalen','Sina','Tara','Eleen','Kara','Dino','John']));
