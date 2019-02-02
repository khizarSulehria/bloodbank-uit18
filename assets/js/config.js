var config = {
    apiKey: "AIzaSyAG7jf9ahfdzmECIELD6p4J2xpAuK4kvDE",
    authDomain: "fir-demo1-a7f8b.firebaseapp.com",
    databaseURL: "https://fir-demo1-a7f8b.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  const database = firebase.database();
export function databaseInst(){
    return database;
}
 