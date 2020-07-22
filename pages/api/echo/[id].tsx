import { NextApiRequest, NextApiResponse } from 'next';

interface idNextApiRequest extends NextApiRequest {
  query: {
    id: number | string;
  };
}

export default function getById(req: idNextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(req.query.id);
  res.json({ yourId: req.query.id });
}
