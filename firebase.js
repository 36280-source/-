// Import Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyCvWAznYtpjtRsXm4g9FuW4ZFr4d1MfJF4",
  authDomain: "yakisoba-order.firebaseapp.com",
  projectId: "yakisoba-order",
  storageBucket: "yakisoba-order.firebasestorage.app",
  messagingSenderId: "902273705180",
  appId: "1:902273705180:web:27451fd8f173a1e93ec019",
  measurementId: "G-3GHWHWRBRF"
};

// เริ่มใช้งาน Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();
