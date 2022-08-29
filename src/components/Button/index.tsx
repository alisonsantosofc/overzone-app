import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'info' | 'success' | 'warning' | 'negative' | 'transparent';
  size?: 'small' | 'large';
}

export function Button({children, type, size}: ButtonProps) {
  console.log(type);
  

  return (
    <button 
      type="button"
      className={`${styles.buttonContainer} ${styles[type]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}