// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpqoHGswvL2U5gNVgl_yPAoEF5p1vx8fg",
  authDomain: "medical-appointment-d8904.firebaseapp.com",
  projectId: "medical-appointment-d8904",
  storageBucket: "medical-appointment-d8904.appspot.com",
  messagingSenderId: "982632893000",
  appId: "1:982632893000:web:a43aa85a67ba76314d667d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;