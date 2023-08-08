import { NextApiRequest, NextApiResponse } from "next"
import getNgoDetails from "../../../lib/methods/getNgoDetails"
import apiMiddleware from "../../../lib/apiMiddleware"

const NgoList = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization

  if (req.method === "GET") {
    apiMiddleware(res, token)
    // check if a response has already been sent by the middleware
    if (!res.headersSent) {
      // if not then fetch data & send
      try {
        const data = await getNgoDetails()
        res.status(200).json(data)
      } catch (error: any) {
        res.status(500).json({
          details: "Please try again.",
          error: error.message,
          type: "Error",
        })
      }
    }
  } else {
    res.status(405).json({
      details: "Please try again.",
      error: `${req.method} type of request is not allowed.`,
      type: "Error",
    })
  }
}

export default NgoList
