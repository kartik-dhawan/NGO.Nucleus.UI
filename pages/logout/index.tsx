import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { app } from "../../firebase/config"
import { useDispatch } from "react-redux"
import { toggleMenuList } from "../../redux/slices/authSlice"
import Link from "next/link"

const Logout = () => {
  const auth = getAuth(app)
  const router = useRouter()
  const dispatch = useDispatch()

  const [isLogoutError, setIsLogoutError] = useState<boolean>(false)

  useEffect(() => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("firebase-token-storage")
        localStorage.setItem("isAuthenticated", "false")
        document.cookie = "firebase-token-storage='';"
        router.push("/")
        dispatch(toggleMenuList(false))
      })
      .catch(() => {
        setIsLogoutError(true)
      })
  }, [auth, dispatch, router])

  return (
    <>
      <pre>
        {isLogoutError ? (
          <>
            Error please <Link href="/logout">try again</Link>
          </>
        ) : (
          "Please wait while we log you out..."
        )}
      </pre>
    </>
  )
}

export default Logout
