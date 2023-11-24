import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlCik-W2QQvSprn-MfYo0bdODnbDNcZuw",
  authDomain: "e-cats.firebaseapp.com",
  projectId: "e-cats",
  storageBucket: "e-cats.appspot.com",
  messagingSenderId: "713750225188",
  appId: "1:713750225188:web:1994aa0cf5ec6c511153b1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
