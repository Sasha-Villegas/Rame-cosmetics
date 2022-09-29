import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/Navbar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZrZ7F6EHuMGwvq48ZeO9q43RU7-B3pa0",
  authDomain: "ramecosmetics-coderhouse.firebaseapp.com",
  projectId: "ramecosmetics-coderhouse",
  storageBucket: "ramecosmetics-coderhouse.appspot.com",
  messagingSenderId: "331801158271",
  appId: "1:331801158271:web:1a2080f8080e3d5e91154a",
  measurementId: "G-L5JH5NRXYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
