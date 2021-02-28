import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3u5Wtk-iWqFeDzydCwFXhQoHpxUuu6Hc",
  authDomain: "chainevents-81c3b.firebaseapp.com",
  projectId: "chainevents-81c3b",
  storageBucket: "chainevents-81c3b.appspot.com",
  messagingSenderId: "1084188424587",
  appId: "1:1084188424587:web:c559ca80d04bdda65bd78e",
  measurementId: "G-KCVVFP9WL6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};