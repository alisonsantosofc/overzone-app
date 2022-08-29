import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { toast } from 'react-toastify';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  planPriceId: string;
}

export function SubscribeButton({ planPriceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('google');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      toast.error(
        <div>
          <h4>Erro na Assinatura</h4>
          <p>Ocorreu um erro com a sua assinatura, tente novamente mais tarde.</p>
        </div>
      );
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
