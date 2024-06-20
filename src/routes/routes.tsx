import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { getSessionData } from '../helpers/auth.helper'

const Users = lazy(() => import('../pages/users/Users'))
const Login = lazy(() => import('../pages/login/login'))

const isLogged = () => {
  return getSessionData()
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: isLogged() ? <Users /> : <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
