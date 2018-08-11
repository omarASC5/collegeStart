var loggedIn = false;
//1.
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signUp = document.getElementById('signUpBtn');
const logIn = document.getElementById('logInBtn');
const logOut = document.getElementById('logOutBtn');


signUp.addEventListener('click', () => {   
    const txtEmail = userEmail.value;
    const txtPassword = userPassword.value;
    const auth = firebase.auth();
    const createUser = auth.createUserWithEmailAndPassword(txtEmail, txtPassword);
    console.log("SIGNED UP");
});


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
    } else {
        //TODO: Future code for the home page will go here:
        loggedIn = false;
    }
});

