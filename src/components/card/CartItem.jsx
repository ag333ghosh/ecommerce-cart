import { useState } from "react";
import { increment, decrement, removeFromCart } from "../../Slices/CartSlice"
import { useDispatch } from "react-redux"

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function CardItem({ product }) {
    const { id, productImgLocation, name, rating, price, features, isInCart, quantity } = product;
    const dispatch = useDispatch();
    const priceNum = Number(price);

    const [prodCount, setProdCount] = useState(quantity);
    const [productPrice, setProductPrice] = useState(priceNum);

    const originalprice = price / quantity;

    function removeProductFromCart(productId) {
        dispatch(removeFromCart(productId))
    }

    function updateCartQuantityAndPrice(val) {
        if (val === 1 && prodCount < 5) {
            setProdCount((prev) => prev + 1)
            setProductPrice((prev) => prev + originalprice)
            dispatch(increment({ ...product, quantity: 1, price: originalprice }))
        } else if (val === -1 && prodCount > 1) {
            setProdCount((prev) => prev - 1)
            setProductPrice((prev) => prev - originalprice)
            dispatch(decrement({ ...product, quantity: 1, price: originalprice }))
        }
    }


    return (
        <div className="flex w-full justify-center mt-1 ">
            <div className="flex border border-gray-300  rounded-md w-[98%] h-64 bg-white shadow-md hover:shadow-lg transition-all">
            <div className="object-cover w-1/5 p-2">
                    <LazyLoadImage
                        src={productImgLocation}
                        alt=""
                        effect="blur"
                        onError={(e) => (e.target.src = "/backup.jpg")}
                    />
                </div>

                <div className="pl-5 p-3 w-4/6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h1>
                    <p className='flex pt-1 text-yellow-600 mb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </p>
                    <p className="text-green-600 text-sm">In Stock</p>
                    <p className="text-sm text-gray-600">Eligible for FREE Shipping</p>
                    <p className="text-xl text-blue-600 font-semibold mt-1">Prime</p>
                    <br />
                    <div className="flex text-center mt-3.5">
                        <button className="px-3 py-1 bg-gray-500 text-white rounded-l-md hover:bg-gray-400" onClick={() => { updateCartQuantityAndPrice(-1) }}>-</button>
                        <span className="px-4 text-xl">{prodCount}</span>
                        <button className="px-3 py-1 bg-gray-500 text-white rounded-r-md hover:bg-gray-400" onClick={() => { updateCartQuantityAndPrice(1) }}>+</button>
                    </div>
                </div>
                <div className="pt-7 pl-5 w-1/6">
                    <h1 className="text-2xl mb-[125px] font-bold text-green-600">&#8377;{productPrice}</h1>
                    <button
                        onClick={() => {
                            removeProductFromCart(id)
                        }}
                        type="button"
                        className="flex ml-4 focus:outline-none text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-2 py-2 me-2 mb-2 dark:focus:ring-yellow-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

