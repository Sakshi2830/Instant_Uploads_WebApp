  // Your web app's Firebase configuration
  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';


  var firebaseConfig = {
    apiKey: "AIzaSyBipP4uWJJmnhHM6w26c882AAdBqAnFKTg",
    authDomain: "react-photo-gallery-5db2c.firebaseapp.com",
    projectId: "react-photo-gallery-5db2c",
    storageBucket: "react-photo-gallery-5db2c.appspot.com",
    messagingSenderId: "755766705161",
    appId: "1:755766705161:web:6e9d1e186df0518c190cd8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{projectStorage,projectFirestore,timestamp};
