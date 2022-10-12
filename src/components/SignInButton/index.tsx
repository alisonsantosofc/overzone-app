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
      <span>Conectar com Google</span>
    </button>
  );
}
