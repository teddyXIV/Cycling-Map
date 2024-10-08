import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore, collection, doc, setDoc, query, where, getDocs } from 'firebase/firestore';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env';


//================================================================================================
//INITIALIZE AND CONFIG 
//=================================================================================================

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);


//=================================================================================================
//SIGN IN/UP FUNCTIONS
//=================================================================================================

const signIn = async (email, password) => {
  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    console.log(`${user.displayName} signed in!`)

    return user;

  } catch (error) {
    console.error('Error signing in: ', error.message);
  }
}

const signUp = async (displayName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: displayName })

    //automatically creates 'users' collection if it doesn't exist, 
    //and adds new user with user.uid as id with email and username properties. 
    const userRef = doc(collection(db, 'users'), user.uid);
    await setDoc(userRef, {
      username: displayName,
      email: email
    });

    return user;

  } catch (error) {
    console.error('Error creating account: ', error.message);
  }
};

//=========================================================================================
//SIGN OUT FUNCTION
//==========================================================================================

const logOut = async () => {
  try {
    await signOut(auth);
    console.log('Sign out successful')
  } catch (error) {
    console.error('Error signing out: ', error.message);
  }
};

//==========================================================================================
//RETRIEVE USER ROUTE FUNCTIONS
//==========================================================================================

const getRoutes = async (user) => {
  if (user) {
    const userId = user.uid;

    const routesRef = collection(db, 'dummy-routes');

    const q = query(routesRef, where('userId', '==', userId));

    try {
      const querySnapshot = await getDocs(q);

      const routes = querySnapshot.docs.map(doc => doc.data());

      console.log("ROUTES: ", routes)
      return routes;
    } catch (error) {
      console.error("Error fetching routes: ", error);
      throw error;
    }
  } else {
    console.log("No user logged in ");
    return [];
  }
}


export { db, auth, signIn, signUp, getRoutes, logOut };

