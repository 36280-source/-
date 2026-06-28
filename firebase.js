// Import Firebase SDK
const firebaseConfig = {

  apiKey: "ใส่ของคุณ",

  authDomain: "ใส่ของคุณ",

  projectId: "ใส่ของคุณ",

  storageBucket: "ใส่ของคุณ",

  messagingSenderId: "ใส่ของคุณ",

  appId: "ใส่ของคุณ"

};

// เริ่มใช้งาน Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();
