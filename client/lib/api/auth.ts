import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const signIn = async (email: string, password: string) => {
  try {
    console.log('Attempting to sign in with:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Sign in successful:', userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    console.error('Sign in error:', error);
    // Extract the error message from Firebase error
    const errorMessage = error.message || 'An error occurred during sign in';
    throw new Error(errorMessage);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Sign out error:', error);
    throw error;
  }
};