import Navbar from "../common/Navbar"
import { ChildrenType } from "../../utils/interfaces"

const Layout = ({ children }: ChildrenType) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  )
}

export default Layout
