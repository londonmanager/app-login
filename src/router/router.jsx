import { createBrowserRouter } from 'react-router-dom'
import { Auth } from '../layouts/Auth.jsx'
import { NoAuth } from '../layouts/NoAuth.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Login from '../pages/Login.jsx'
import Menu from '../pages/Menu.jsx'
import SignUp from '../pages/SignUp.jsx'
import ResetPassword from '../pages/ResetPassword.jsx'
import Profile from '../pages/Profile.jsx'
import '../index.scss'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <NoAuth>
        <AuthLayout>
          <Login />
        </AuthLayout>
      </NoAuth>
    )
  },
  {
    path: '/signup',
    element: (
      <NoAuth>
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      </NoAuth>
    )
  },
  {
    path: '/reset-password',
    element: (
      <NoAuth>
        <AuthLayout>
          <ResetPassword />
        </AuthLayout>
      </NoAuth>
    )
  },
  {
    path: '/profile',
    element: (
      <Auth>
        <Profile />
      </Auth>
    )
  },
  {
    path: '/menu/:popID',
    element: (
      <Auth>
        <Menu />
      </Auth>
    )
  }
])

export default router
