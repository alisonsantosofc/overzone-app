import { NextApiRequest, NextApiResponse } from 'next';

export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);
  

  return res.json({});
}
