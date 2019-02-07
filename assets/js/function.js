function getUserData(userId){ //return promise
    return firebase.database().ref('/users/' + userId).once('value')
}
function updateUserName(user,displayname){ //return promise
    return user.updateProfile({
        displayName: displayname,
      });
}