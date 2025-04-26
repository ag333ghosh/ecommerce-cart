import { useEffect } from 'react';
import CartItem from '../card/CartItem'
import CheckOut from '../card/CheckOut'
import { useSelector } from "react-redux"


function Cart() {

  const cartProducts = useSelector(store => store.cart.cartItems);

  return (
    <div className='flex w-full h-[535px]'>
      <div className='w-[80%] overflow-y-auto'>
        {
          cartProducts.length > 0 ? (cartProducts.map((product) => (
            <CartItem
              product={product}
              key={product.id}
            />
          ))) :
            (<div className='text-center text-3xl text-red-400 mt-4'>Cart is empty... 🤔</div>)
        }
      </div>
      <div className='w-[20%]'>
        <CheckOut />
      </div>
    </div>
  )
}

export default Cart
