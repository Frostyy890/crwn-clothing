// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBBTM5Jl6SCGkR6-ItkOVByLPy6rxRN48",
  authDomain: "crwn-dbp.firebaseapp.com",
  projectId: "crwn-dbp",
  storageBucket: "crwn-dbp.appspot.com",
  messagingSenderId: "609325649374",
  appId: "1:609325649374:web:625933425fb0af5cb7214f",
  measurementId: "G-XGV5JT6F9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
