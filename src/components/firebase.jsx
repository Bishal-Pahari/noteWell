// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjWEQTDtq80yMKFIyQGB_lkgQKH1d-OmA",
  authDomain: "notewell-e9dfc.firebaseapp.com",
  // databaseURL: "https://notewell-e9dfc-default-rtdb.firebaseio.com",
  projectId: "notewell-e9dfc",
  storageBucket: "notewell-e9dfc.appspot.com",
  messagingSenderId: "920868934336",
  appId: "1:920868934336:web:e10e26a384637b6ce4d325",
  measurementId: "G-RX2HQLKVVG"
};

const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth=getAuth(app);


// const firebaseConfig = {
//   apiKey: "AIzaSyC0d8-BzRqpFUCNZO-VgTpzT7a6vcSRpJ0",
//   authDomain: "notewell.firebaseapp.com",
//   projectId: "notewell",
//   storageBucket: "notewell.appspot.com",
//   messagingSenderId: "394539505461",
//   appId: "1:394539505461:web:0017a133c8b4e49e465e7c",
//   measurementId: "G-Q35PZ7BDVD",
 
// };

