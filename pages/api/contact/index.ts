// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getAllContacts } from "../../../lib/methods/getAllContacts"
import apiMiddleware from "../../../lib/apiMiddleware"

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization

  if (req.method === "GET") {
    apiMiddleware(res, token)
    // check if a response has already been sent by the middleware
    if (!res.headersSent) {
      // if not then fetch data & send
      try {
        const data = await getAllContacts()
        return res.status(200).json(data)
      } catch (error: any) {
        return res.status(500).json({
          details: "Please try again.",
          error: error.message,
          type: "Error",
        })
      }
    }
  } else {
    return res.status(405).json({
      details: "Please try again.",
      error: `${req.method} type of request is not allowed.`,
      type: "Error",
    })
  }
}

export default Contact
