import { NextApiRequest, NextApiResponse } from 'next';

export default function usersRouter(req: NextApiRequest, res: NextApiResponse) {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'John Tre' },
    { id: 3, name: 'John Qua' },
  ];

  return res.json(users);
}
