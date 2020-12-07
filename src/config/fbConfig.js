import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCWbfmhJ99HWj5maDz50mlNU0s3zSsjkog",
    authDomain: "fireb-6a60f.firebaseapp.com",
    databaseURL: "https://fireb-6a60f.firebaseio.com",
    projectId: "fireb-6a60f",
    storageBucket: "fireb-6a60f.appspot.com",
    messagingSenderId: "282848515676",
    appId: "1:282848515676:web:33d9f9214641cdead6f899",
    measurementId: "G-LQ8PQGGBPD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({timestampInSnapshots: true})

  export default firebase