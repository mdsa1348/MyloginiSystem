import { initializeApp } from "https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
  
  var db = firebase.firestore();
  var datab = firebase.database().ref('data');
  
  function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
        // User registration successful
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // Handle error
      });
  }
  
  function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
  
    const auth = firebase.auth();
  
    auth.signInWithEmailAndPassword(email, password)
      .then(function () {
        // Sign in successful, execute desired action
        console.log("Success! Welcome back!");
        window.alert("Signed in successfully.");
      })
      .catch(function (error) {
        // Sign in error
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Sign in error.");
      });
  }
  /* function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
} */


/* submitButton.addEventListener("click", function() {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success! Welcome back!");
        window.alert("Success! Welcome back!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occurred. Try again.");
        window.alert("Error occurred. Try again.");
      });
  }); */


/* function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        var usersRef = db.collection('users');
        
        usersRef.where('email', '==', email).where('password', '==', password)
          .get()
          .then(function(querySnapshot) {
            if (!querySnapshot.empty) {
              // Email and password match, execute desired action (open Google in new window)
              window.open("https://www.google.com", "_self");
            } else {
              // Email and password do not match, show error message
              alert("Invalid email or password");
            }
          })
          .catch(function(error) {
            console.log('Error retrieving user data: ', error);
          });
      })
      .catch(function(error) {
        alert(error.message);
      });
  } */
  
  
  


/* function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    var usersRef = firebase.database().ref('data');

    usersRef.once('value')
        .then(function(snapshot) {
            var users = snapshot.val();
            var match = false;

            for (var key in users) {
                if (users.hasOwnProperty(key)) {
                    var user = users[key];
                    if (user.email === email && user.password === password) {
                        match = true;
                        break;
                    }
                }
            }

            if (match) {
                // Email and password match, execute desired action
                window.open("https://www.google.com", "_self");
            } else {
                // Email and password do not match
                alert("Invalid email or password");
            }
        })
        .catch(function(error) {
            console.log('Error retrieving users data: ', error);
        });
} */


  function signout() {
    const auth = firebase.auth();
  
    auth.signOut()
      .then(function () {
        // Sign out successful
      })
      .catch(function (error) {
        // An error happened
      });
  }
  