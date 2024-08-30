import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/firebase';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsSignedIn(true)
      } else {
        setCurrentUser(null)
        setIsSignedIn(false)
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSignedIn,
        setIsSignedIn,
        isLoading,
        setIsLoading
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;