import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";

// Wklej tu dane z Firebase: Project settings → Your apps → Web app → firebaseConfig.
const firebaseConfig = {
  apiKey: "AIzaSyB1kyPCOtTIpLsmKrpCCioTfBgrGfJeqT8",
  authDomain: "misje-zuzy-i-lenusi.firebaseapp.com",
  projectId: "misje-zuzy-i-lenusi",
  storageBucket: "misje-zuzy-i-lenusi.firebasestorage.app",
  messagingSenderId: "914177669603",
  appId: "1:914177669603:web:017709e760e0dc385488d6"
};

export const hasFirebaseConfig = firebaseConfig.apiKey !== "WKLEJ_TUTAJ" && firebaseConfig.projectId !== "WKLEJ_TUTAJ";
let app = null;
let db = null;
if (hasFirebaseConfig) { app = initializeApp(firebaseConfig); db = getFirestore(app); }
export { db, doc, onSnapshot, setDoc, serverTimestamp };
