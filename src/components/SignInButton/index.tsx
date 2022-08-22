import { FaGoogle } from 'react-icons/fa';

import styles from './styles.module.scss';

export function SignInButton() {
  return (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGoogle />
      Conectar com Google
    </button>
  );
}
