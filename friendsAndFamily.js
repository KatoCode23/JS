function friendsAndFamily (originalArray, acceptedFriends) {
     var friendsAndFamilyArray = [];
     acceptedFriends = ['Kalen', 'Eleen', 'Sina', 'Tara'];
     acceptedFriendsLength = acceptedFriends.length;
     var originalArrayLength = originalArray.length;
for(var i = 0; i < acceptedFriendsLength; i++){
     accepted = acceptedFriends[i];
     if(originalArray.indexOf(accepted) > -1) {
       friendsAndFamilyArray.push(accepted);
     }
}
return 'Here is my friends and family array: ' + friendsAndFamilyArray;
}

console.log(friendsAndFamily([4,'James','Eric','Kalen', 'Eleen', 'Sina', 'Tara', 'Adam', 'Peter', 'Mary', 'Moses']));
console.log(friendsAndFamily(['Cow','Pizza','Kalen', 'Noodles', 'Sina', 'Tara', 'false', null, 17, 'Moses']));
console.log(friendsAndFamily(['boo','Protein','Kalen', 'Eleen', 'Sina', 'Tara', 'Rocko', 'Beata', null, 17, 'Moses']));
