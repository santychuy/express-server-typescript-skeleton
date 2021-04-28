import { Request, Response } from 'express';

export const IndexController = (_req: Request, res: Response) => {
  return res.send('Prueba Skeleton');
};
