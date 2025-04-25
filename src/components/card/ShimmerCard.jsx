import React from 'react'

export default function ShimmerCard() {
    return (
        <div className="flex w-full justify-center mt-2">
            <div className="flex border border-gray-300 rounded-lg w-[98%] h-64 bg-white shadow-md hover:shadow-lg transition-all animate-pulse">
                {/* Image Placeholder */}
                <div className="w-1/5 p-3">
                    <div className="bg-gray-300 w-full h-full rounded-lg"></div>
                </div>

                {/* Text & Ratings Placeholder */}
                <div className="pl-5 py-3 w-4/6 flex flex-col justify-between">
                    <div>
                        <div className="bg-gray-300 h-6 w-2/3 mb-2 rounded-md"></div>
                        <div className="flex space-x-2 mb-2">
                            <div className="bg-gray-300 w-6 h-6 rounded-md"></div>
                            <div className="bg-gray-300 w-6 h-6 rounded-md"></div>
                            <div className="bg-gray-300 w-6 h-6 rounded-md"></div>
                            <div className="bg-gray-300 w-6 h-6 rounded-md"></div>
                            <div className="bg-gray-300 w-6 h-6 rounded-md"></div>
                        </div>
                        <div className="bg-gray-300 h-4 w-1/4 mb-1 rounded-md"></div>
                        <div className="bg-gray-300 h-4 w-1/3 mb-1 rounded-md"></div>
                        <div className="bg-gray-300 h-5 w-1/6 rounded-md"></div>
                    </div>
                </div>

                {/* Price & Button Placeholder */}
                <div className="flex flex-col items-center justify-between py-6 pr-5 w-1/6">
                    <div className="bg-gray-300 h-6 w-16 mb-4 rounded-md"></div>
                    <div className="bg-yellow-300 h-10 w-[80%] rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}
