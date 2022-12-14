import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { stripe } from '../../services/stripe';
import { query as q } from 'faunadb';
import { fauna } from '../../services/fauna';

type User = {
  ref: {
    id: string;
  },
  data: {
    stripeCustomerId: string;
  }
}

export default async function subscribeRouter(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    );

    let customerId = user.data.stripeCustomerId;

    if(!customerId) {
      // create stripe customer
      const stripeCustomer = await stripe.customers.create({
        name: session.user.name,
        email: session.user.email,
        // metadata: session.user,
      });

      await fauna.query(
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: {
              stripeCustomerId: stripeCustomer.id,
            }
          }
        )
      );

      customerId = stripeCustomer.id;
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1LZmevKzC5kWMiSujfU9IOmN', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: `${process.env.NEXTAUTH_URL}/releases`,
      cancel_url: process.env.NEXTAUTH_URL,
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id})
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
