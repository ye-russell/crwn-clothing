import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

console.log('firebase.utils.js file');


const firebaseConfig = {
  apiKey: 'AIzaSyC8RAurZjRjOe8SNN8I_WFCuKEoqEmdwx0',
  authDomain: 'crwn-clothing-db-146af.firebaseapp.com',
  projectId: 'crwn-clothing-db-146af',
  storageBucket: 'crwn-clothing-db-146af.appspot.com',
  messagingSenderId: '1047514190137',
  appId: '1:1047514190137:web:1daae67b7fd6df2f0f58e8',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return userDocRef;
};
