/**
 * Created by sha on 27-Dec-17.
 */

var config = {
    apiKey: "AIzaSyBCyeId6r79-7wGwM8rr7FvBW8946PzUpw",
    authDomain: "kkkk-6617d.firebaseapp.com",
    databaseURL: "https://kkkk-6617d.firebaseio.com",
    projectId: "kkkk-6617d",
    storageBucket: "kkkk-6617d.appspot.com",
    messagingSenderId: "956897131729"
};
firebase.initializeApp(config);

var demo= document.getElementById("demo");

function storelocation() {


    var firebaseref= firebase.database().ref();

    firebaseref.child("Location").set(
        {Lat:y.innerHTML,
        long:z.innerHTML})


}



