// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg63iSZZcjzDNvD7HfPrYv-NiBkTsK29c",
  authDomain: "contact-manager-62af7.firebaseapp.com",
  databaseURL: "https://contact-manager-62af7-default-rtdb.firebaseio.com",
  projectId: "contact-manager-62af7",
  storageBucket: "contact-manager-62af7.appspot.com",
  messagingSenderId: "88027637943",
  appId: "1:88027637943:web:ebe43161a0dd2836940532",
  measurementId: "G-ZLG2ELV6F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log("Hello World");

export default analytics;