import React from 'react'
import { useSelector } from "react-redux"
import { Outlet, Navigate, useLocation } from "react-router"

function ProtectedRoute() {
  const auth = useSelector(store => store.auth);

  if (!auth.user) {
    const redirectLocation = useLocation();
    sessionStorage.setItem("redirect", redirectLocation.pathname);
  }

  return auth.user ? (<Outlet />) // outlet is CART_PAGE
    : (<Navigate to="/ecommerce-cart/login" replace />)
}
export default ProtectedRoute;

