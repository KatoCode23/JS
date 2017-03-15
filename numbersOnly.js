//Every Other Index

function numbersOnly(originalArray){
  var numbersOnlyArray = [];
  var originalArrayLength = originalArray.length;
  for(var i = 0; i < originalArrayLength; i++){
      if(typeof(originalArray[i]) === 'number'){
        numbersOnlyArray.push(originalArray[i]);
    }
  }
  return 'Check out my numbers only array: ' + numbersOnlyArray;
}

console.log(numbersOnly(['Snow', 2, 'Babyen', 88, 'Dino', 9, 'Kato', 23, 'Kara', 29]));
