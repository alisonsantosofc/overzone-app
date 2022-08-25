import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInButton() {
  return (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('google')}
    >
      <FaGoogle />
      Conectar com Google
    </button>
  );
}
