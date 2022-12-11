import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCJXgoBxTFFh60mWcBzTW4vD2zXsHwGQVg",
  authDomain: "testing-f63e0.firebaseapp.com",
  projectId: "testing-f63e0",
  storageBucket: "testing-f63e0.appspot.com",
  messagingSenderId: "779185407586",
  appId: "1:779185407586:web:4d255d8f5085f1c925333b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};