function friendsAndFamily (originalArray) {
friendsAndFamilyArray = [];
var originalArrayLength = originalArray.length;
var kalen = 'Kalen';
var eleen = 'Eleen';
var sina = 'Sina';
var tara = 'Tara';
for (var i = 0; i < originalArrayLength; i++){
  if(originalArray[i] === kalen || originalArray[i] === eleen || originalArray[i] === sina || originalArray[i] === tara){
    friendsAndFamilyArray.push(originalArray[i]);
  }
}

return 'Here is my friends and family array: ' + friendsAndFamilyArray;
}

console.log(friendsAndFamily([4,'James','Eric','Kalen', 'Eleen', 'Sina', 'Tara', 'Adam', 'Peter', 'Mary', 'Moses']));
