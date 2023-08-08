import { NextApiRequest, NextApiResponse } from "next"
import getNgoDetails from "../../../lib/methods/getNgoDetails"

const NgoList = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
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
  } else {
    res.status(405).json({
      details: "Please try again.",
      error: `${req.method} type of request is not allowed.`,
      type: "Error",
    })
  }
}

export default NgoList
