import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface HyperButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'info' | 'success' | 'warning' | 'negative' | 'transparent';
  size?: 'small' | 'large';
  customClass?: string;
}

export function HyperButton({children, type, size, customClass, ...props}: HyperButtonProps) {
  return (
    <button 
      type="button"
      className={`${styles.buttonContainer} ${styles[type]} ${styles[size]} ${customClass}`}
      {...props}
    >
      {children}
    </button>
  );
}