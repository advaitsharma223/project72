import { firebase } from '@firebase/app';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyDjlPOzn5jpXNUnSa-qGQCzCmRZDsAWvC0",
    authDomain: "project-71-final-new.firebaseapp.com",
    projectId: "project-71-final-new",
    storageBucket: "project-71-final-new.appspot.com",
    messagingSenderId: "167942151712",
    appId: "1:167942151712:web:3cae56d452e4dc5a9ca645"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();