// 
import { initializeApp } from 'firebase/app';

// firebase提供的各种验证开箱即用的api
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// 
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// firebase 的基本配置(个人配置   key) 
const firebaseConfig = {
  apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
  authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
  projectId: 'crwn-clothing-db-98d4d',
  storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
  messagingSenderId: '626766232035',
  appId: '1:626766232035:web:506621582dab103a4d08d6',
};

// 使用配置
const firebaseApp = initializeApp(firebaseConfig);

// google验证 提供商
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// firebase身份验证
export const auth = getAuth();

// google和firebase对照验证(弹出登录提示界面)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
