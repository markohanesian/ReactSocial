import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Required for side-effects
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy49QJAEVPPURcw1wPnrR5yaF0Gu-GFlc",
  authDomain: "social-media-app-mso.firebaseapp.com",
  databaseURL: "https://social-media-app-mso-default-rtdb.firebaseio.com",
  projectId: "social-media-app-mso",
  storageBucket: "social-media-app-mso.appspot.com",
  messagingSenderId: "267213391628",
  appId: "1:267213391628:web:a17b05c10a4cd2b9192b29",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, storage, provider };
