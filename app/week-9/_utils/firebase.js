import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

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
let analytics;

// Only initialize analytics if it's supported in this environment
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error("Analytics not supported:", error);
  });
}

const auth = getAuth(app); 

export { auth };
