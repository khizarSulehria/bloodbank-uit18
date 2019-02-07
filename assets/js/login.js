$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user);
         if(!user.displayName){
            getUserData(user.uid)
            .then((snapshot)  =>{
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            console.log(snapshot.val());

           updateUserName(user,username)
            .then(() => {
                console.log("Update Display Name");
            });
         });
         }
        
         
         
         
        } else {
          // No user is signed in.
        }
      });
});


