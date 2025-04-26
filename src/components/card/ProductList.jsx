import { useState } from "react";
import Complete from "../Rating/Complete";
import Empty from "../Rating/Empty";
import { useNavigate } from "react-router";


export default function ProductList({ product }) {
  const navigate = useNavigate();
  const { id, productImgLocation, name, rating, price } = product;
  const [imgSrc, setImageSrc] = useState(productImgLocation)

  // Generate rating array
  const rateArray = Array.from({ length: 5 }, (_, i) => (i < Math.floor(rating) ? 1 : 0));

  // Format price with commas
  const formatPrice = (price) => price.toLocaleString("en-IN");

  const viewProductInfo = () => navigate(`/ecommerce-cart/productInfo/${id}`);

  /* 
    <img
      src="broken-link.jpg"
      alt="Image"
      onError={(e) => (e.target.src = "fallback.jpg")}
    /> 
  */

  return (
    <div className="flex w-full justify-center mt-2">
      <div className="flex border border-gray-300 rounded-lg w-[98%] h-64 bg-white shadow-md hover:shadow-lg transition-all">
        
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImageSrc("/backup.jpg")}
          className="object-cover w-1/5 p-3 rounded-lg"
        />
        
        <div className="pl-5 py-3 w-4/6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h1>
            <div className="flex text-yellow-500 mb-2">
              {rateArray.map((val, ind) => (val ? <Complete key={ind} /> : <Empty key={ind} />))}
            </div>
            <p className="text-green-600 text-sm">In Stock</p>
            <p className="text-sm text-gray-600">Eligible for FREE Shipping</p>
            <p className="text-xl text-blue-600 font-semibold mt-1">Prime</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between py-6 pr-5 w-1/6">
          <h1 className="text-2xl text-green-600 font-bold">&#8377;{formatPrice(price)}</h1>
          <button
            onClick={viewProductInfo}
            className="w-[80%] text-center text-white bg-yellow-500 hover:bg-yellow-400 font-medium rounded-lg px-4 py-2 transition-all focus:ring-4 focus:ring-yellow-300"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
