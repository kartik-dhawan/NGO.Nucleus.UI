import Navbar from "../common/Navbar"
import { ChildrenType } from "../../utils/interfaces"
import Footer from "../common/Footer"

const Layout = ({ children }: ChildrenType) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
