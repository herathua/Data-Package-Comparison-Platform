import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function generateToken(adminId: string) {
  return jwt.sign({ id: adminId }, JWT_SECRET, {
    expiresIn: '1d',
  });
}

export async function verifyAuth(req: NextApiRequest) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided');
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Not authorized');
  }
}

export function withAuth(handler: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await verifyAuth(req);
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Not authorized' });
    }
  };
}