function reverse(originalArray) {
  var reversedArray = [];
  var originalArrayLength = originalArray.length;
  for(var i = 0; i < originalArrayLength; i++){
    var poppedNumber = originalArray.pop(originalArray[i]);
    reversedArray.push(poppedNumber);
  }

  return 'Here is your reverse Array: ' + reversedArray;
}
console.log(reverse(['Kalen','Sina','Tara','Eleen','Kara','Dino','John']));
