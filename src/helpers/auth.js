import axios from 'axios'

const apiUrlValidateToken = `${
  import.meta.env.VITE_LONDONMANAGER_URL
}/auth/validate-token`

const validateToken = async idToken => {
  try {
    const { data } = await axios.get(apiUrlValidateToken, {
      headers: {
        authorization: idToken
      }
    })
    return data
  } catch (err) {
    return
  }
}

const removeToken = () => {
  window.sessionStorage.removeItem('idToken')
}

const logOut = () => {
  window.sessionStorage.removeItem('idToken')
  window.location.href = '/login'
}

export { validateToken, removeToken, logOut }
