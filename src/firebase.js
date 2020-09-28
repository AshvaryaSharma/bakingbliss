import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrUElJRju6dWkdv9WpR90SlZ0THfLDlsg",
  authDomain: "baking-bliss.firebaseapp.com",
  databaseURL: "https://baking-bliss.firebaseio.com",
  projectId: "baking-bliss",
  storageBucket: "baking-bliss.appspot.com",
  messagingSenderId: "656733712606",
  appId: "1:656733712606:web:ff8184103ba4e7498c524f",
  measurementId: "G-BJPG0VVVDP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/admin.directory.customer.readonly');

export {db, auth, firebase, provider}