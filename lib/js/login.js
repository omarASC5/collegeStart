
var loggedIn = false;
var database = firebase.database();
//1.
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const logIn = document.getElementById('logInBtn');
const logOut = document.getElementById('logOutBtn');




logIn.addEventListener('click', () => {
    const txtEmail = userEmail.value;
    const txtPassword = userPassword.value;
    const auth = firebase.auth();
    const signInUser = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
    console.log("SIGNED IN");
});

logOut.addEventListener('click', () => {
    firebase.auth().signOut();
    console.log("LOGGED OUT");
});




//2.
// auth.signInWithEmailAndPassword(email, pass);

// //3.

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        //TODO: Future code for the dashboard will go here:
    loggedIn = true;
    console.log("FOF")
        // writeUserData(currentUid, nameTxt, ageTxt, nameTxt, ageTxt, raceTxt, currentSchoolTxt, locationInput, schoolTypeTxt, schoolSizeTxt);
        
    } else {
        //TODO: Future code for the home page will go here:
        loggedIn = false;
    }
});