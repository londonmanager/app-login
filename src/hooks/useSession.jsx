import { useEffect, useState } from 'react'
import { removeToken, validateToken } from '../helpers/auth'

export function useSession () {
  const [data, setData] = useState()
  const [status, setStatus] = useState('loading')
  
  useEffect(() => {
    const idToken = window.sessionStorage.getItem('idToken')

    if (idToken) {
      validateToken(idToken).then((data) => {
        if(data) {
          setStatus('authenticated')
          setData(data)
        } else {
          setStatus('unauthenticated')
          setData()
          removeToken()
        }
      })
    } else {
      setStatus('unauthenticated')
      setData()
    }
  }, [])

  return {
    data,
    status
  }
}
