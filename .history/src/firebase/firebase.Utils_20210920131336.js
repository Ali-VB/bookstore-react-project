import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIFrqCbZfnEDYgfwoM6aZsuTjac_ZoVQU",
    authDomain: "bookstore-react-app-dc999.firebaseapp.com",
    projectId: "bookstore-react-app-dc999",
    storageBucket: "bookstore-react-app-dc999.appspot.com",
    messagingSenderId: "294595599290",
    appId: "1:294595599290:web:b6afef2607072cf2c09b83",
    measurementId: "G-SVXSRZJHJ1"
};
const app = initializeApp(config);
//firebase.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();

const provider = new app.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default app;
