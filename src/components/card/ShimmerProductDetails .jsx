import React from 'react'

const ShimmerProductDetails = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 h-[535px]">
            <div className="bg-white shadow-lg rounded-lg p-5 w-full animate-pulse">
                {/* Back Button Placeholder */}
                <div className="flex items-center mb-[18px] w-24 h-6 bg-gray-300 rounded"></div>

                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/3 h-64 bg-gray-300 rounded-lg shadow-md"></div>

                    {/* Product Info Placeholder */}
                    <div className="md:w-2/3 md:ml-6">
                        <div className="h-8 w-2/3 bg-gray-300 rounded-md mb-2"></div> {/* Product Name */}
                        <div className="flex space-x-2 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-6 h-6 bg-gray-300 rounded-md"></div> // Star ratings
                            ))}
                        </div>
                        <div className="h-6 w-1/3 bg-gray-300 rounded-md mb-1"></div> {/* Price */}
                        <div className="h-4 w-1/4 bg-gray-300 rounded-md mb-1"></div> {/* Shipping */}
                        <div className="h-5 w-1/6 bg-gray-300 rounded-md"></div> {/* Prime */}

                        {/* Features Placeholder */}
                        <div className="mt-4">
                            <div className="h-6 w-1/4 bg-gray-300 rounded-md mb-2"></div>
                            <ul className="list-disc list-inside">
                                {[...Array(3)].map((_, i) => (
                                    <li key={i} className="h-4 w-5/6 bg-gray-300 rounded-md mb-1"></li>
                                ))}
                            </ul>
                        </div>

                        {/* Quantity Selector Placeholder */}
                        <div className="mt-5 flex items-center">
                            <div className="px-3 py-2 bg-gray-300 rounded-md w-10 h-10"></div>
                            <div className="px-4 text-xl w-10 h-10 bg-gray-300 rounded-md mx-2"></div>
                            <div className="px-3 py-2 bg-gray-300 rounded-md w-10 h-10"></div>
                        </div>

                        {/* Add to Cart Button Placeholder */}
                        <div className="w-full mt-4 h-10 bg-yellow-300 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerProductDetails 
