// Import the required methods
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// The config we copied from firebase(Replace with your config)
const firebaseConfig = {
  apiKey: 'AIzaSyAf1mdxvFtXQTfTq5vi5Gdr7Y20beuLUyQ',
  authDomain: 'sports-odds-b78c3.firebaseapp.com',
  projectId: 'sports-odds-b78c3',
  storageBucket: 'sports-odds-b78c3.appspot.com',
  messagingSenderId: '506896511571',
  appId: '1:506896511571:web:9658acaa0244c798fb0ca6',
  measurementId: 'G-S1J05BNWLF',
};

// initialize the firebase app
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

// export the auth object
// eslint-disable-next-line import/prefer-default-export
export { auth };
