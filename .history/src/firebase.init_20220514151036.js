// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ-D6ILuso2EfXsEe45kM7HB9-MCQ7HP4",
  authDomain: "doctors-protal-49d3d.firebaseapp.com",
  projectId: "doctors-protal-49d3d",
  storageBucket: "doctors-protal-49d3d.appspot.com",
  messagingSenderId: "457605794302",
  appId: "1:457605794302:web:411b3ade98f86ec8d1d8af",
};

// Initialize Firebase
const firebaseApp =initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export default firebaseApp