import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function CheckoutBox() {
    const cartProducts = useSelector(store => store.cart.cartItems);

    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(()=>{
        if(!(cartProducts?.length>0)){
            setIsDisabled(true)
        }
    },[cartProducts])

    const totalPrice = cartProducts.reduce((acc, item) => acc + item.price, 0);
    const totalProducts = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
    const discount = Math.round(totalPrice * 0.1);
    const finalTotal = Math.round(totalPrice - discount);

    return (
        <div className="w-[97%] mt-1 bg-white border border-gray-300 rounded-xl shadow-lg p-5">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">Order Summary</h3>
            <hr className="border-t border-gray-300" />

            <div className="space-y-3 my-3">
                <div className="flex justify-between">
                    <span className="text-md text-gray-600">Cart Total</span>
                    <span className="text-md font-medium text-gray-700">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-md text-gray-600">Discount (10%)</span>
                    <span className="text-md font-medium text-red-500">- ₹{discount}</span>
                </div>
            </div>

            <hr className="border-t border-gray-300" />

            <div className="flex justify-between mt-4">
                <span className="text-lg font-semibold text-gray-800">Subtotal ({totalProducts} items):</span>
                <span className="text-lg font-semibold text-gray-800">₹{finalTotal}</span>
            </div>

            <div className="flex justify-center pt-4">
                <button
                    disabled={isDisabled}
                    type="button"
                    className={`w-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 
                        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:from-yellow-600 hover:to-yellow-700'} 
                        focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-6 py-2.5 transition-all shadow-md`}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
}
