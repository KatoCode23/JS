function luckyYou(originalArray) {
  var luckyYouArray = [];
  var originalArrayLength = originalArray.length;
  for (var i = 0; i < originalArrayLength; i++){
    parseInt(originalArray[i]);
        if(originalArray[i] % 3 === 0){
            originalArray[i] = 'Lucky';
        }
        if(originalArray[i] % 5 === 0){
          originalArray[i] = 'You';
        }
        else if(originalArray[i] % 3 === 0 && originalArray[i] % 5 === 0){
          originalArray[i] = 'Lucky You';
        }
        luckyYouArray.push(originalArray[i]);
    }


      return 'Here is my Lucky You Array: ' + luckyYouArray;

}

console.log(luckyYou(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']));
