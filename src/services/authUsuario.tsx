import { auth } from '~/services/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário cadastrado:', user);
    })
    .catch((error) => {
      // Houve um erro ao criar o usuário
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao cadastrar:', errorCode, errorMessage);
    });
};

const login = (email: string, senha: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário logado:', user);
    })
    .catch((error) => {
      // Houve um erro ao fazer login
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao fazer login:', errorCode, errorMessage);
    });
};

export { signUp, login };
