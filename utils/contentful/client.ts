import { createClient } from "contentful"

const contentfulConfig = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "dev",
}

export const client = createClient(contentfulConfig)
