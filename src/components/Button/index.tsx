import { HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'info' | 'success' | 'warning' | 'negative' | 'transparent';
  size?: 'small' | 'large';
}

export function Button({children}: ButtonProps) {

  return (
    <button 
      type="button"
      className={styles.buttonContainer}
    >
      {children}
    </button>
  );
}