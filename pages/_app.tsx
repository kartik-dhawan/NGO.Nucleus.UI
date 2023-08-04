import type { AppProps } from "next/app"
import "../styles/index.scss"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { PAGES_WITH_NO_NAVBAR } from "../utils/constants"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useEffect } from "react"
import { hasTokenExpired } from "../utils/methods"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    /**
     * whenever the route changes, check if the token is still alive
     * if it is not, then set the storage's isAuth to false
     * and remove the token from storage
     */
    const tokens = JSON.parse(
      localStorage.getItem("firebase-token-storage") ?? "{}",
    )
    const isTokenExpired = tokens.expirationTime
      ? hasTokenExpired(tokens.expirationTime)
      : true

    localStorage.setItem("isAuthenticated", JSON.stringify(!isTokenExpired))
    isTokenExpired && // eslint-disable-line
      (localStorage.removeItem("firebase-token-storage"),
      (document.cookie = `firebase-token-storage={};`)) // eslint-disable-line
  }, [router])

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
