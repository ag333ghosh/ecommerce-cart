import { createContext, useContext, useEffect, useReducer, useState } from "react";

const productContext = createContext({});

export const useProductContext = () => {
    return useContext(productContext);
}

const initialValue = {
    products: [],
    uniqueBrandNames: [],
    product: {},
    searchProducts: []
}


function productReducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS": {
            return { ...state, products: action.payload }
        }
        case "GET_PRODUCT_BY_ID": {
            return { ...state, product: action.payload }
        }
        case "GET_MATCHED_PRODUCTS": {
            return { ...state, searchProducts: action.payload }
        }
        case "GET_ALL_BRAND": {
            return { ...state, uniqueBrandNames: action.payload }
        }
        default:
            return state;
    }
}

export const ProductContextProvider = ({ children }) => {

    const [productData, dispatch] = useReducer(productReducer, initialValue);

    useEffect(() => {
        const fetchProductsAndBrands = async () => {
            try {
                // const response = await fetch("/products.json");
                const response = await fetch("/ecommerce-cart/products.json");
                
                
                // const response = await fetch("../../public/products.json");
                const data = await response.json();
                    console.log(data);
                    
                // geting all brands names
                const unqueBrandNames = [];
                const brandNames = data.map((item) => {
                    return item.brandName
                });

                for (let i = 0; i < brandNames.length; i++) {
                    if (!unqueBrandNames.find(item => item === brandNames[i])) {
                        unqueBrandNames.push(brandNames[i])
                    }
                }
                
                dispatch({ type: "SET_PRODUCTS", payload: data })
                dispatch({ type: "GET_ALL_BRAND", payload: unqueBrandNames });
            } catch (error) {
                console.error("Error fetching products and setting brand names :", error);
            }
        };
        fetchProductsAndBrands();
    }, []);

    async function getProductById(id) {
        try {
            const response = await fetch("/products.json");
            const data = await response.json();
            const foundData = data.find(item => item.id === id);
            dispatch({ type: "GET_PRODUCT_BY_ID", payload: foundData });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    async function searchByBrandName(brandName) {
        try {
            const response = await fetch("/products.json");
            const data = await response.json();
            const foundData = data.filter(item => item.brandName === brandName)
            dispatch({ type: "GET_MATCHED_PRODUCTS", payload: foundData });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    return (
        <productContext.Provider value={{
            products: productData.products,
            selectedProduct: productData.product,
            searchProducts: productData.searchProducts,
            keywords:productData.uniqueBrandNames,
            searchByBrandName,
            getProductById
        }}>
            {children}
        </productContext.Provider>
    );
};