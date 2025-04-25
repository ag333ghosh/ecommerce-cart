import { ProductContextProvider } from './context/ProductsContext'
import { BrowserRouter, Routes, Route } from "react-router"
import { Home, Cart, LoginAndSignup, ProductDetails, SearchProducts, NotFound } from "./components/Page"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ProtectedRoute from './routes/ProtectedRoute'
import ProtectedLogin from './routes/ProtectedLogin'


function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/ecommerce-cart/' element={<Home />} />
          <Route path='/ecommerce-cart/productInfo/:id' element={<ProductDetails />} />
          <Route path='/ecommerce-cart/search' element={<SearchProducts />} />
          <Route element={<ProtectedLogin />}>
            <Route path='/ecommerce-cart/Login' element={<LoginAndSignup />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/ecommerce-cart/cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductContextProvider>
  )
}


export default App
