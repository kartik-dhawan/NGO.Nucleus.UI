import { createClient } from "contentful"

const contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "dev",
}

export const client = createClient(contentfulConfig)
