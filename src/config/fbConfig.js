import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyD3cpSnh7MC1FhzpL1SAL78RnEp1NrnwIo',
  authDomain: 'dakimaku-32a84.firebaseapp.com',
  projectId: 'dakimaku-32a84',
  storageBucket: 'dakimaku-32a84.appspot.com',
  messagingSenderId: '530040822875',
  appId: '1:530040822875:web:b8a8274c02a93e9e80b37e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics();
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
