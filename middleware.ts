import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { hasTokenExpired } from "./utils/methods"

export const middleware = (req: NextRequest) => {
  const firebaseTokensCookie: string =
    req.cookies.get("firebase-token-storage")?.value ?? "{}"

  const tokens = JSON.parse(firebaseTokensCookie ?? "{}")

  const decodedToken = tokens.accessToken && jwt.decode(tokens?.accessToken)

  if (
    firebaseTokensCookie === "{}" ||
    decodedToken === null ||
    decodedToken === undefined ||
    hasTokenExpired(decodedToken.exp * 1000)
  ) {
    return NextResponse.redirect(new URL("/", req.url))
  } else {
    NextResponse.next()
  }
}

export const config = {
  matcher: ["/admin"],
}
