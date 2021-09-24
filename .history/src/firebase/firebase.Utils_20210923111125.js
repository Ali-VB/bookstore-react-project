import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAIFrqCbZfnEDYgfwoM6aZsuTjac_ZoVQU",
    authDomain: "bookstore-react-app-dc999.firebaseapp.com",
    projectId: "bookstore-react-app-dc999",
    storageBucket: "bookstore-react-app-dc999.appspot.com",
    messagingSenderId: "294595599290",
    appId: "1:294595599290:web:b6afef2607072cf2c09b83",
    measurementId: "G-SVXSRZJHJ1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/`)
    const snapShot = await userRef.get();

    if ( snapShot.exists){

    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
