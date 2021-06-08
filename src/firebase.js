import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBYyuPmJ7WHNXeEZV20L0ijCppmEjHP-Co",
    authDomain: "app-f28d2.firebaseapp.com",
    projectId: "app-f28d2",
    storageBucket: "app-f28d2.appspot.com",
    messagingSenderId: "61817596687",
    appId: "1:61817596687:web:dcc8e508ef84cd1dbf2c7a"
  };


  //Connects frontend to backend 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };


