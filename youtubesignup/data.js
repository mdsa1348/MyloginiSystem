

var firebaseConfig = {
    apiKey: "AIzaSyDgv8aeCWm4icMKVSzAo4vY8sIKPi6mSV4",
    authDomain: "contactform-43027.firebaseapp.com",
    databaseURL: "https://contactform-43027-default-rtdb.firebaseio.com",
    projectId: "contactform-43027",
    storageBucket: "contactform-43027.appspot.com",
    messagingSenderId: "423502265015",
    appId: "1:423502265015:web:619379e4c87afd64a96b32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var db = firebase.firestore();
var datab = firebase.database().ref('data');
function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

    }).catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const auth = firebase.auth();
const submitButton = document.getElementById("submit");


 function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            window.open("./Afterloginpage.html", "_self");
        })
        .catch(function (error) {
            var extraMessage = "Additional message goes here";
            alert(error.message + "\n" + extraMessage);
        });
 
        

    /* promise.catch( e => alert(e.msg)); */
    /* promise.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  var extraMessage = "Additional message goes here"; // Add your extra message here

  var fullErrorMessage = errorMessage + "\n" + extraMessage;
  alert(fullErrorMessage);
  exit(0);
}); */


}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email: getId('eemail'),
        password: getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function getId(id) {
    return document.getElementById(id).value;
}

// Sign out the current user
function SignOut() {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful
        console.log("User signed out successfully");
        // Redirect to the login page or any other desired action
        window.location.href = "login.html";
      })
      .catch((error) => {
        // An error occurred
        console.log("Error occurred during sign out:", error);
      });
  }
  