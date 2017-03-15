function evenNumbers(originalArray) {
  var evenNumbersArray = [];

  for (var i = 0; i < originalArray.length; i++){
    if(originalArray[i] % 2 === 0 ){
      evenNumbersArray.push(originalArray[i]);
    }
    //console.log(originalArray[i]);
  }
  return 'Here is your even numbers Array: ' + evenNumbersArray;
}

console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
