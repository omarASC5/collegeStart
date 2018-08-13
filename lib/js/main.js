







var loggedIn = false;
var database = firebase.database();
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

function writeUserData(userId, name, age, currentSchool, race, distanceFromHome, userSchoolType, userSchoolSize) {
// function writeUserData(userId, name, age) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      age: age,
      
      race: race,
      school: currentSchool,
      location: distanceFromHome,
      schoolType: userSchoolType,
      schoolSize: userSchoolSize
    });
  }


//2.
// auth.signInWithEmailAndPassword(email, pass);

// //3.

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        //TODO: Future code for the dashboard will go here:
        loggedIn = true;
        const currentUid = firebaseUser.uid;
    console.log(currentUid);

        const nameInput = document.getElementById('nameInput');
        const nameTxt = nameInput.value;

        const ageInput = document.getElementById('age');
        const ageTxt = ageInput.value;

        const raceInput = document.getElementById('Race');
        const raceTxt = raceInput.value;

        const currentSchoolInput = document.getElementById('school');
        const currentSchoolTxt = currentSchoolInput.value;

        const locationInput = document.getElementById('location');
        const locationTxt = locationInput.value;

        const schoolTypeInput = document.getElementById('schoolType');
        const schoolTypeTxt = schoolTypeInput.value;

        const schoolSizeInput = document.getElementById('schoolSize');
        const schoolSizeTxt = schoolSizeInput.value;


        firebase.database().ref('users/' + currentUid).set({
            username: nameTxt,
            age: ageTxt,
            
            race: raceTxt,
            school: currentSchoolTxt,
            location: locationTxt,
            schoolType: schoolTypeTxt,
            schoolSize: schoolSizeTxt
          });
        // writeUserData(currentUid, nameTxt, ageTxt, nameTxt, ageTxt, raceTxt, currentSchoolTxt, locationInput, schoolTypeTxt, schoolSizeTxt);
        
    } else {
        //TODO: Future code for the home page will go here:
        loggedIn = false;
    }
});


//Writes User Data to database


//   writeUserData('LWRuqVlSFWPgX9bxZuLZhZO31cB2', 'Omar', 'New York');