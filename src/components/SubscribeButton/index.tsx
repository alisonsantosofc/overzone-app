import styles from './styles.module.scss';

interface SubscribeButtonProps {
  planPriceId: string;
}

export function SubscribeButton({ planPriceId }: SubscribeButtonProps) {
  return (
    <button 
      type="button"
      className={styles.subscribeButton}
    >
      Assinar agora
    </button>
  );
}