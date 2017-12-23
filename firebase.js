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
function writeUserData(userId, email, password) {
    firebase.database().ref('users/'+userId).set({
        email: email,
        password:password
    });
}

function login() {
    var form= document.forms[0];

    var name =form["uname"].value;
    var password= form["psw"].value;
    var email = form["email"].value;

    writeUserData(name,email,password)
}
