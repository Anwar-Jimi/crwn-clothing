import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyAsfzLGzpPoxbk6hDY3iQ0aHM3VcDgHCFc",
    authDomain: "crwn-db-a61f5.firebaseapp.com",
    projectId: "crwn-db-a61f5",
    storageBucket: "crwn-db-a61f5.appspot.com",
    messagingSenderId: "62751208782",
    appId: "1:62751208782:web:5e4e3ffdac043a754e9a1f",
    measurementId: "G-9XY3JRREMM"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();


    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
} 


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;