import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfKJArh0oBoNmzJWPRWTaolvTQEagAgdc",
  authDomain: "restaurantapp-572a5.firebaseapp.com",
  databaseURL: "https://restaurantapp-572a5-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-572a5",
  storageBucket: "restaurantapp-572a5.appspot.com",
  messagingSenderId: "1057858208571",
  appId: "1:1057858208571:web:2c90c8f34fe0e3eecaed1e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
