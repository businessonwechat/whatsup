import { Request, Response } from "express"

export default [
  {
    path: '/api/v1/notes',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const ret = {a: 1}
      res.send(ret)
    }
  },
  {
    path: '/api/v1/hit_with_code',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const ret = {a: 1}
      res.send(ret)
    }
  }
]
