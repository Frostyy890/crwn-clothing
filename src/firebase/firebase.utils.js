// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  getDoc,
  setDoc,
  collection,
  doc,
  query,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, "users", userAuth.uid);
  console.log(userAuth);
  console.log(userAuth.uid);
  const docSnapshot = await getDoc(userRef);

  if (!docSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = serverTimestamp();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating new user", error.message);
    }
  }
  console.log(userRef);
  return userRef;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account ",
});
export const firestore = getFirestore(app);
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
