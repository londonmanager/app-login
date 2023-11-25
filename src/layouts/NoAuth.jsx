import { useNavigate } from "react-router-dom"
import { useSession } from "londonmanager-tools"

export const NoAuth = ({ children }) => {
  const { status } = useSession()

  const navigate = useNavigate()

  if (status === 'unauthenticated' || status === 'loading') {
    return children
  }

  navigate('/profile')
}
