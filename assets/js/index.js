var config = {
    apiKey: "AIzaSyAG7jf9ahfdzmECIELD6p4J2xpAuK4kvDE",
    authDomain: "fir-demo1-a7f8b.firebaseapp.com",
    databaseURL: "https://fir-demo1-a7f8b.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();
    function register(){
        let full_name = document.getElementById("full_name").value;

        let email_address = document.getElementById("email_address").value;
        let user_password = document.getElementById("user_password").value;
        let gender = document.getElementById("gender");
        let blood_group = document.getElementById("blood_group").value;
        let phone_number = document.getElementById("phone_number").value;
        let present_address = document.getElementById("present_address").value;
        let city = document.getElementById("permanent_address").value;
        let nid_number = document.getElementById("nid_number").value;

        firebase.auth().createUserWithEmailAndPassword(email_address, user_password)
        .then(user => {

          //  var key = firebase.database().ref().child('users').push().key;
          var key = user.user.uid;
            firebase.database().ref('users/' + key).set({
                id : key,
                username: full_name,
                email: email_address,
                gender : gender,
                phone_number : phone_number,
                present_address : present_address,
                city : city,
                nid_number : nid_number,
                blood_group:blood_group
            });
        })
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });        
    }

    function userLogin(){
        let email_address = document.getElementById("email_address").value;
        let user_password = document.getElementById("user_password").value;
        firebase.auth().signInWithEmailAndPassword(email_address, user_password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    function userSignOut(){
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
          }, function(error) {
            console.error('Sign Out Error', error);
          });
    } 


    $(document).ready(function(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log("1 ==> ");
                console.log(user);
                 window.location.href = "index.html";
            } else {
              // No user is signed in.
            }
          });
    });
    
    