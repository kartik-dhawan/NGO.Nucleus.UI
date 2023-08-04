import type { AppProps } from "next/app"
import "../styles/index.scss"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { PAGES_WITH_NO_NAVBAR } from "../utils/constants"
import { Provider } from "react-redux"
import store from "../redux/store"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (PAGES_WITH_NO_NAVBAR.includes(router.pathname)) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}
