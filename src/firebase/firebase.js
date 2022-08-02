import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrceu0J6WULkuAAZeT8jgb_WrsSherGCg",
  authDomain: "coderhouse-ecommerce-lld.firebaseapp.com",
  projectId: "coderhouse-ecommerce-lld",
  storageBucket: "coderhouse-ecommerce-lld.appspot.com",
  messagingSenderId: "700991060566",
  appId: "1:700991060566:web:6f5e93d417d3a643d319f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;