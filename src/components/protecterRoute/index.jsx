import { Navigate } from "react-router-dom"
import { useContext } from "react"
import Menu from "../../context/menuContext"

export function ProtectedRoutes({ children }) {
  const { auth, loading } = useContext(Menu)

  if (loading)
    return (
      <div className='d-flex justify-content-center align-items-center text-center h-100'>
        <div className='spinner-border text-danger ' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )

  if (!auth) return <Navigate to={"/login"} />

  return <>{children}</>
}
