// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiTS20Tw9cXaln1bYrGDDYVsA_IaLdo8w",
  authDomain: "shopping-list-a6c07.firebaseapp.com",
  projectId: "shopping-list-a6c07",
  storageBucket: "shopping-list-a6c07.appspot.com",
  messagingSenderId: "882065958056",
  appId: "1:882065958056:web:0452bc13ee2b77aad58e9d",
  measurementId: "G-BYC858S53D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);