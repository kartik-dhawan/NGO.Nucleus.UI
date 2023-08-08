// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import getContactDetails from "../../../lib/methods/getContactDetails"

const Contact = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "GET") {
    try {
      const data = await getContactDetails()
      res.status(200).json(data)
    } catch (error: any) {
      res.status(500).json({
        details: "Please try again.",
        error: error.message,
        type: "Error",
      })
    }
  } else {
    res.status(405).json({
      details: "Please try again.",
      error: `${req.method} type of request is not allowed.`,
      type: "Error",
    })
  }
}

export default Contact
