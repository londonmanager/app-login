import { useNavigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { cloneElement } from 'react'

export const Auth = ({ children }) => {
  const { data: user, status } = useSession()

  const navigate = useNavigate()

  if (status === 'unauthenticated') {
    return navigate('/login')
  }

  if (status === 'loading') {
    return <div>Cargando...</div>
  }

  const newChildren = cloneElement(children, { user })

  return newChildren
}
