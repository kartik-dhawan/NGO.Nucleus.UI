import { NextApiRequest, NextApiResponse } from "next"
import { getContactByFirestoreId } from "../../../lib/methods/getContactByFirestoreId"
import { updateAContact } from "../../../lib/methods/updateAContact"
import apiMiddleware from "../../../lib/apiMiddleware"

const SingleContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { contactId } = req.query
  const updatedRecord = req.body
  const token = req.headers.authorization

  apiMiddleware(res, token)

  if (!res.headersSent) {
    if (req.method === "PUT") {
      try {
        await updateAContact(updatedRecord, contactId)
        const updatedData = await getContactByFirestoreId(contactId)
        return res.status(200).json(updatedData)
      } catch (err: any) {
        return res.status(500).json({
          details: "Please try again.",
          error: err.message,
          type: "Error",
        })
      }
    } else {
      return res.status(405).json({
        details: "Please try again.",
        error: `${req.method} type of request is not allowed.`,
        type: "Error",
      })
    }
  }
}

export default SingleContact
