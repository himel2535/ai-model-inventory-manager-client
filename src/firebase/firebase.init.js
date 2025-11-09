// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU3MMcoUiaF5a8_ZC0ZzuObNwtR1b57ik",
  authDomain: "ai-model-inventory-manag-45b01.firebaseapp.com",
  projectId: "ai-model-inventory-manag-45b01",
  storageBucket: "ai-model-inventory-manag-45b01.firebasestorage.app",
  messagingSenderId: "671015004939",
  appId: "1:671015004939:web:14ae15e1b74fe2656ad00e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
