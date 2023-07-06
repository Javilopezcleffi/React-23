import { getFirestore } from "firebase/firestore"// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJgoIkAhmbAleMnAnVuLzcapTrewFsPjk",
  authDomain: "galeriavirtual-a2c78.firebaseapp.com",
  projectId: "galeriavirtual-a2c78",
  storageBucket: "galeriavirtual-a2c78.appspot.com",
  messagingSenderId: "827798691131",
  appId: "1:827798691131:web:bdeb92be43e5580f606b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)