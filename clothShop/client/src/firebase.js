// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgtSGQAvmyD7Q3I5k8Ni-YKgW4bAl2OZM",
  authDomain: "clothshop-5c79d.firebaseapp.com",
  projectId: "clothshop-5c79d",
  storageBucket: "clothshop-5c79d.appspot.com",
  messagingSenderId: "581081733877",
  appId: "1:581081733877:web:23049e868727044a5e83bc",
  measurementId: "G-0Z8W6M5EV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
