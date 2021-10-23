import { createContext, useCallback, useEffect, useState } from "react";
import { auth } from '../utils/firebase'

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  // [ 現在のユーザー, 現在のユーザーを更新する関数]　初期値はnull
  const [currentUser, setCurrentUser ] = useState(null);

  const signUp = useCallback(async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
  }, [])

  const signIn = useCallback(async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
  }, [])

  const signOut = useCallback(async (email, password) => {
    await auth.signOut()
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged(user => setCurrentUser(user))
  }, [])

  return(
    <AuthContext.Provider value={{ currentUser, signUp, signIn, signOut}}>
      { children }
    </AuthContext.Provider>
  )

}
