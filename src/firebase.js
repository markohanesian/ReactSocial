import firebase from 'firebase';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCy49QJAEVPPURcw1wPnrR5yaF0Gu-GFlc",
  authDomain: "social-media-app-mso.firebaseapp.com",
  projectId: "social-media-app-mso",
  storageBucket: "social-media-app-mso.appspot.com",
  messagingSenderId: "267213391628",
  appId: "1:267213391628:web:a17b05c10a4cd2b9192b29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };