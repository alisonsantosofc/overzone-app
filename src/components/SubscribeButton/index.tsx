import { signIn, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  planPriceId: string;
}

export function SubscribeButton({ planPriceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  
  function handleSubscribe() {
    if (!session) {
      signIn('google');
      
      return;
    }
  }

  return (
    <button 
      type="button"
      className={styles.subscribeButton}
      onClick={() => handleSubscribe()}
    >
      Assinar agora
    </button>
  );
}