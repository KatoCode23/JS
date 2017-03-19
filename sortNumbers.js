function sortNumbers(originalArray){
var sortedArray = [];
var originalArrayLength = originalArray.length;
for (var i = 0; i < originalArrayLength; i++){
  if(typeof(originalArray[i]) === 'number'){
    sortedArray.push(originalArray[i]);
    sortedArray.sort(function (a,b){return a - b});
  }
}

return 'Here is my sorted array: ' + sortedArray;
}

console.log(sortNumbers([7,14,'Sina', null, false, 78, 'boo',10,6,1,39,23,8]));
