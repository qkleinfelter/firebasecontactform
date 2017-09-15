// Initialize firebase
var config = {
  apiKey: "AIzaSyB32aRZzlf66FmgFPfZkueWLx3LmqAUJDg",
  authDomain: "contactform-ac7c2.firebaseapp.com",
  databaseURL: "https://contactform-ac7c2.firebaseio.com",
  projectId: "contactform-ac7c2",
  storageBucket: "contactform-ac7c2.appspot.com",
  messagingSenderId: "219432149014"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for submission
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 5 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 5000);

  //Clear form
  document.getElementById('contactform').reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
