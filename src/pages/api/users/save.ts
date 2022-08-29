import { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from '../../../services/fauna';

export default function saveUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body);

    return res.json(req.body);
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
