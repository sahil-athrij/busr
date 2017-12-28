/**
 * Created by sahil on 12/19/2017.
 */

var config = {
    apiKey: "AIzaSyAIxloswxrJeV-o5uuvvVNAkkJjRyN5jJg",
    authDomain: "busr-99a0d.firebaseapp.com",
    databaseURL: "https://busr-99a0d.firebaseio.com",
    projectId: "busr-99a0d",
    storageBucket: "busr-99a0d.appspot.com",
    messagingSenderId: "226311595601"
};

firebase.initializeApp(config);

function writeUserData(userId, email, password,location) {
    firebase.database().ref('users/'+userId).set({
        email: email,
        password:password,
        lat:location.coords.latitude,
        long:location.coords.longitude
    });
    console.log(location)
}

function login(location) {
    var form= document.forms[0];

    var name =form["uname"].value;
    var password= form["psw"].value;
    var email = form["email"].value;

    writeUserData(name,email,password,location)
}

function loginposition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(login)
    }
}