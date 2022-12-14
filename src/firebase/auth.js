import { app } from './index.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import user from '../stores/User';

const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('result', result);
        let newUser = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
        }

        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        }
    })
    .catch((error) => {
        console.warn('error', error);
    });
}

const logout = () => {
    signOut(auth)
    .then(() => {
        console.log('logout');
        user.value = null;
        localStorage.setItem('user',null)
    })
    .catch((error) => {
        console.warn('error',error);
    });
}

export { loginWithGoogle, logout }