"use strict";

var signUpForm = document.getElementById("signup-form");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var displayNameInput = document.getElementById("display-name-input");

signUpForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    // validation code here when we have a password confirmation box

    //use Firebase to create a new user
    //with the email and password
    //after the account is created, then use
    //the .updateProfile() method to set the display name
    firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function(user) {
            return user.updateProfile({
                displayName: displayNameInput.value
            });
            // executes once update profile is finished
        })
        .then(function() {
            // tells browser to navigate to a new page
            window.location = "secure.html";
        })
        .catch(function(err) {
            alert(err.message);
        });


    return false;
});