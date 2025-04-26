import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center max-h-[535px] h-screen bg-gray-100 text-gray-900 p-6">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg mt-2 text-gray-600">Oops! Page not found.</p>
            <Link 
                to="/ecommerce-cart" 
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
