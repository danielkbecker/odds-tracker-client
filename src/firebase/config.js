// Import the required methods
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// (Replace with your config)
const firebaseConfig = {
  apiKey: 'AIzaSyCQAdIK_Tgi3LEiIAsvgw1ksq6UTsVRPCo',
  authDomain: 'nil-angels-411817.firebaseapp.com',
  projectId: 'nil-angels-411817',
  storageBucket: 'nil-angels-411817.appspot.com',
  messagingSenderId: '107014679011',
  appId: '1:107014679011:web:96583de7fc6ea4b93b98d6',
  measurementId: 'G-4C8MLNZWP1',
};

// initialize the firebase app
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

// export the auth object
// eslint-disable-next-line import/prefer-default-export
export { auth };
