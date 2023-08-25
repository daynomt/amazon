import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD7yyhy2QTSS2Xh3u7opKcT4dhGDFAC2BM",
//   authDomain: "clo-3c023.firebaseapp.com",
//   projectId: "clo-3c023",
//   storageBucket: "clo-3c023.appspot.com",
//   messagingSenderId: "180985715549",
//   appId: "1:180985715549:web:7114035cdad972519226b4",
//   measurementId: "G-DZ6TLSKQNN",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCRhOX8u-jDOYLxbvXbFLDy7Cydwgo3ut0",
  authDomain: "clone-39244.firebaseapp.com",
  projectId: "clone-39244",
  storageBucket: "clone-39244.appspot.com",
  messagingSenderId: "690705591399",
  appId: "1:690705591399:web:58808f80241c5c0bed78c2",
  measurementId: "G-W7P1H1VHPT",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
