import { auth } from '~/services/firebase.config';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email: string, senha: string) => {
  return signInWithEmailAndPassword(auth, email, senha);
};

const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export { signUp, login, resetPassword };
