import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGb_lM8TZBqam54s_U_laV7U7qptL8bw",
  authDomain: "dheo-putranta-id.firebaseapp.com",
  projectId: "dheo-putranta-id",
  storageBucket: "dheo-putranta-id.firebasestorage.app",
  messagingSenderId: "444966490723",
  appId: "1:444966490723:web:22855ade3a4b7008571e56",
  measurementId: "G-Z07316YQGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
export default app;