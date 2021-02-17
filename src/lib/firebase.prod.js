import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBf0CCgPL5GVZxm1CKc_NbljZ-wA4UJfgo",
  authDomain: "netflix-e7c54.firebaseapp.com",
  projectId: "netflix-e7c54",
  storageBucket: "netflix-e7c54.appspot.com",
  messagingSenderId: "222601331782",
  appId: "1:222601331782:web:113893a7efe1a95bcfb647"
}

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };