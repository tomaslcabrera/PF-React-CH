import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4_P7AVFrDaF1Vpa2POvaQyxjPoB-gtPM",
  authDomain: "backend-kaizoku.firebaseapp.com",
  projectId: "backend-kaizoku",
  storageBucket: "backend-kaizoku.appspot.com",
  messagingSenderId: "61004527813",
  appId: "1:61004527813:web:49f828efb71183bf9ad8ac"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);