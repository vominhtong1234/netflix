// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDTaQYBMveNcKFxMKySr-O9X04vXmb4suY',
	authDomain: 'netflix-reactjs-tailwind.firebaseapp.com',
	projectId: 'netflix-reactjs-tailwind',
	storageBucket: 'netflix-reactjs-tailwind.appspot.com',
	messagingSenderId: '214916939726',
	appId: '1:214916939726:web:7e99005f0dc43d4195759f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
