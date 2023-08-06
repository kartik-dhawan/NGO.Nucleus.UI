import { ReactNode } from "react"

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main>
      <>Admin Layout</>
      {children}
    </main>
  )
}

export default AdminLayout
