import React from 'react'
import { Outlet, Navigate } from "react-router"
import { useSelector } from 'react-redux'

function ProtectedLogin() {
  
  const auth = useSelector(store => store.auth);

  const isAuthenticated = auth.user || "";
  const redirectURL = sessionStorage.getItem('redirect');

  if (isAuthenticated && redirectURL) {
    sessionStorage.removeItem('redirect')
    return <Navigate to={redirectURL} replace />
  } else if (isAuthenticated) {
    return <Navigate to="/" replace />
  } else {
    return <Outlet />
  }
}
export default ProtectedLogin;


