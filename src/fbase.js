import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD9NNbihBlO0fVluBNDTJaumfZTxR43mLU",
  authDomain: "movble.firebaseapp.com",
  projectId: "movble",
  storageBucket: "movble.appspot.com",
  messagingSenderId: "70426787900",
  appId: "1:70426787900:web:49c511ad76c9ddaaf90339",
  measurementId: "G-KPZJTJLLFG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dbService = getFirestore(app); 
const auth = getAuth(app);
const storage = getStorage(app);

export { app, dbService, analytics, auth, storage };