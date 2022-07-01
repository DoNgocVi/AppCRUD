// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR2oQ5F-EAVFAlRo_YxhmSd-ddkL_XPoc",
  authDomain: "vue3crud-f3b85.firebaseapp.com",
  projectId: "vue3crud-f3b85",
  storageBucket: "vue3crud-f3b85.appspot.com",
  messagingSenderId: "638514046390",
  appId: "1:638514046390:web:9115a2c064aefab9860d17",
  measurementId: "G-R2WB0WVHP0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;
