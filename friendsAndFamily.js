function friendsAndFamily (originalArray, acceptedFriends) {
var friendsAndFamilyArray = [];
acceptedFriends = ['Kalen', 'Eleen', 'Sina', 'Tara'];
acceptedFriendsLength = acceptedFriends.length;
for(var i = 0; i < acceptedFriendsLength; i++ ){
  var accepted = acceptedFriends[i];
  console.log(accepted);
}
var originalArrayLength = originalArray.length;
for(var i = 0; i < originalArrayLength; i++){
  if(originalArray[i] === accepted){
    friendsAndFamilyArray.push(accepted);
  }
}


return 'Here is my friends and family array: ' + friendsAndFamilyArray;
}

console.log(friendsAndFamily([4,'James','Eric','Kalen', 'Eleen', 'Sina', 'Tara', 'Adam', 'Peter', 'Mary', 'Moses']));
