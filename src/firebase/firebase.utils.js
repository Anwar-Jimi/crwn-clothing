import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAsfzLGzpPoxbk6hDY3iQ0aHM3VcDgHCFc",
    authDomain: "crwn-db-a61f5.firebaseapp.com",
    projectId: "crwn-db-a61f5",
    storageBucket: "crwn-db-a61f5.appspot.com",
    messagingSenderId: "62751208782",
    appId: "1:62751208782:web:5e4e3ffdac043a754e9a1f",
    measurementId: "G-9XY3JRREMM"
  };

  firebase.intializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;