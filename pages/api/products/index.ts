// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      data: any[]
      pagination: any
    }
  | { message: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    res.status(404).json({ message: 'method not support' })
  }
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10'
  )
  const responseJSON = await response.json()
  res.status(200).json(responseJSON)
}
