//Numbers Only

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
console.log(numbersOnly([3, 2, 4, 88, 26, 9, 'Kato' , 23,13, 29,12,15]));
