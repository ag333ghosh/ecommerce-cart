import React, { useState, useEffect } from 'react';
import Complete from '../Rating/Complete';
import Empty from '../Rating/Empty';
import ShimmerProductDetails from "../card/ShimmerProductDetails "
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/CartSlice';
import { useProductContext } from '../../context/ProductsContext';

import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProductInfo() {

    const { getProductById, selectedProduct } = useProductContext()
    const [product, setProduct] = useState({});
    const [productCount, setProductCount] = useState(1);
    const param = useParams();
    const id = Number(param.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getProductById(id);
    }, [id]);

    useEffect(() => {
        setProduct(selectedProduct || {});
    }, [selectedProduct]);

    const rateArray = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (i < Math.floor(rating) ? <Complete key={i} /> : <Empty key={i} />));
    };

    const updateCount = (status) => {
        setProductCount((prev) => (status === "inc" && prev < 5 ? prev + 1 : status === "dec" && prev > 1 ? prev - 1 : prev));
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: productCount, price: product.price * productCount }))
        navigate(`/ecommerce-cart/cart`);
    };


    return (
        <div className="flex flex-col items-center bg-gray-100 h-[535px] ">
            {product ? (
                <div className="bg-white shadow-lg rounded-lg p-5 w-full ">
                    <button onClick={() => navigate("/ecommerce-cart")} className="text-gray-600 hover:text-black flex items-center mb-[18px] hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        Back
                    </button>
                    <div className="flex flex-col md:flex-row items-center">

                        <div className="w-full md:w-1/3 rounded-lg shadow-md">
                            <LazyLoadImage
                                src={product.productImgLocation}
                                alt={product.name}
                                // effect="opacity"
                                effect='blur'
                                onError={(e) => (e.target.src = "/backup.jpg")}
                            />
                        </div>

                        <div className="md:w-2/3 md:ml-6 text-gray-800">
                            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                            <div className="flex mb-2 text-yellow-500">{rateArray(product.rating)}</div>
                            <p className="text-2xl font-bold text-gray-900">Price: &#8377;{product.price}</p>
                            <p className="text-sm text-green-600">Eligible for FREE Shipping</p>
                            <p className="text-xl text-blue-600 font-semibold">Prime</p>
                            <h3 className="text-lg font-semibold mt-4">About this item:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {product?.features ? Object.values(product.features).map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                )) : <p>loading...</p>}
                            </ul>
                            <div className="mt-5 flex items-center">
                                <button onClick={() => updateCount("dec")} className="px-3 py-1 bg-gray-500 text-white rounded-l-md hover:bg-gray-400">-</button>
                                <span className="px-4 text-xl">{productCount}</span>
                                <button onClick={() => updateCount("inc")} className="px-3 py-1 bg-gray-500 text-white rounded-r-md hover:bg-gray-400">+</button>
                            </div>
                            <button onClick={handleAddToCart} className="w-full mt-4 bg-yellow-500 text-white font-medium rounded-md py-2 hover:bg-yellow-400">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <ShimmerProductDetails />
            )}
        </div>
    );
}

export default ProductInfo;
