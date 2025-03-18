import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBibmGEpTTkppIKX_lc4dlYXmXBevgBlUc",
  authDomain: "twitter-clone-e10a4.firebaseapp.com",
  projectId: "twitter-clone-e10a4",
  storageBucket: "twitter-clone-e10a4.firebasestorage.app",
  messagingSenderId: "565221893050",
  appId: "1:565221893050:web:e1acebbc8086633abdf383",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
