import { auth } from '~/services/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email: string, senha: string) => {
  return signInWithEmailAndPassword(auth, email, senha);
};

export { signUp, login };
