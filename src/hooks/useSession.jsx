import { useEffect, useState } from 'react'
import { removeToken, validateToken } from '../helpers/auth'

export function useSession () {
  const [state, setState] = useState({
    data: undefined,
    status: 'loading'
  })
  
  useEffect(() => {
    const idToken = window.sessionStorage.getItem('idToken')

    if (idToken) {
      validateToken(idToken).then(data => {
        if(data) {
          setState({
            data: data,
            status: 'authenticated'
          })
        } else {
          setState({
            data: undefined,
            status: 'unauthenticated'
          })
          removeToken()
        }
      })
    } else {
      setState({
        data: undefined,
        status: 'unauthenticated'
      })
    }
  }, [])

  return {
    data: state.data,
    status: state.status
  }
}
