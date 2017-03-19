function sortNumbers(originalArray){
var sortedArray = [];
var originalArrayLength = originalArray.length;
for (var i = 0; i < originalArrayLength; i++){
  if(typeOf(originalArray[i]) === 'number'){
    sortedArray.push(originalArray[i]);
    sortedArray.sort(originalArray[i]);
  }
}

return 'Here is my sorted array: ' + sortedArray;
}

console.log(sortNumbers([7,14,'Sina', null, false, 78, 'boo',10,6]));
