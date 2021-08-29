import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"

const app = initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_VUE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
})

export default app

export const login = (email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password)
}
export const logout = () => signOut(getAuth())

export const registerUserStateChangeEvent = fn => onAuthStateChanged(getAuth(), fn)
