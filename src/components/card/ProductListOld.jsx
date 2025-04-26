import Complete from "../Rating/Complete";
import Empty from "../Rating/Empty";
import { useNavigate } from "react-router";


export default function ProductList({product}) {
    
    const navigate = useNavigate();

    const { id, productImgLocation, name, rating, price, } = product;

    const rateArray = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            rateArray.push(1)
        } else {
            rateArray.push(0)
        }
    }

    const stringPrice = (priceInNum) => {
        let price = String(priceInNum)
        let strPrice = "";
        const priceLength = price.length;
        if (priceLength > 3) {
            if (priceLength === 4) {
                let arr = price.split("")
                arr.splice(1, 0, ",")
                strPrice = arr.join("");

            }
            else if (priceLength === 5) {
                let arr = price.split("")
                arr.splice(2, 0, ",")
                strPrice = arr.join("");

            }
            else if (priceLength === 6) {
                let arr = price.split("")
                arr.splice(1, 0, ",")
                arr.splice(4, 0, ",")
                strPrice = arr.join("");

            }
            else if (priceLength === 7) {
                let arr = price.split("")
                arr.splice(2, 0, ",")
                arr.splice(5, 0, ",")
                strPrice = arr.join("");

            }
        }
        return strPrice;
    }

    const viewProductInfo = (id) => {
        navigate(`/ecommerce-cart/productInfo/${id}`)
    }



    return (
        <div className="flex w-full justify-center mt-1">
            <div className="flex border border-gray-400  rounded-md w-[98%] h-64 bg-stone-100">
                <img
                    src={productImgLocation}
                    className="object-cover w-1/5 p-2" />
                <div className="pl-5 p-3 w-4/6">
                    <h1

                        className="text-2xl mb-1">{name}</h1>

                    <p className='flex pt-1 text-yellow-600 mb-1'>
                        {
                            rateArray.map((val, ind) => {
                                if (val === 1) {
                                    return <Complete key={ind} />
                                }
                                return <Empty key={ind} />
                            })
                        }

                    </p>
                    <p className="text-green-700 text-sm mb-1">in stock</p>
                    <p className="text-sm mb-1">Eligible for FREE Shipping</p>

                    <p className="text-xl mb-2 text-blue-500"><i><b>Prime</b></i></p>
                    <br />
                </div>
                <div className="pt-6 pl-5 w-1/6">
                    <h1 className="text-2xl mb-32 text-green-500 ml-5">&#8377;{stringPrice(price)}</h1>

                    <button
                        onClick={() => {
                            viewProductInfo(id)
                        }}
                        type="button"
                        className=" w-[70%] text-center focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-2 py-1.5 me-2 mb-2 dark:focus:ring-yellow-900">View Product</button>
                </div>
            </div>
        </div>
    )
}

