import { NextApiResponse } from "next"
import { hasTokenExpired } from "../utils/methods"
import jwt from "jsonwebtoken"

const apiMiddleware = (res: NextApiResponse, token: string | undefined) => {
  const decoded: any = token && jwt.decode(token)
  const isTokenExpired = hasTokenExpired(decoded?.exp * 1000)

  if (token === undefined) {
    return res.status(401).json({
      details: "Please login to continue.",
      error: "The request requires user authentication.",
      type: "unauthorized",
    })
  } else if (isTokenExpired) {
    return res.status(401).json({
      details: "The session has expired, please provide new token to continue.",
      error: "The request requires user authentication.",
      type: "token_invalid",
    })
  }
}

export default apiMiddleware
