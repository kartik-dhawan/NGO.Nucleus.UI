import type { AppProps } from "next/app"
import "../styles/index.scss"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { PAGES_WITH_NO_NAVBAR } from "../utils/constants"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (PAGES_WITH_NO_NAVBAR.includes(router.pathname)) {
    return <Component {...pageProps} />
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
