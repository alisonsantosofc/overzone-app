import { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from '../../../services/fauna';

export default function saveUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return res.json({});
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
