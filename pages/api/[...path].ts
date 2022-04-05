// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import httpProxy from 'http-proxy'
import Cookies from 'cookies'

// type Data = {
//   name: string
// }

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {

    // convert cookies to header Authorization

    const cookies = new Cookies(req,res)
      if(cookies.get('access token')){
        req.headers.Authorization = `Bearer ${cookies.get('access token')}`
      }

    req.headers.cookie = ''
    // api/student
    // https://js-post-api.herokuapp.com/api/student

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    proxy.once('proxyRes',() => {
      resolve(true)
    })
  })
  // res.status(200).json({ name: 'PATH - Catch all path' })
}
