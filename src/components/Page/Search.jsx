import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router';
import ProductList from '../card/ProductList';
import { useProductContext } from '../../context/ProductsContext';

function Search() {

  const [searchParam] = useSearchParams();
  const category = searchParam.get("q");
  const location = useLocation();
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const { searchProducts, searchByBrandName } = useProductContext()

  useEffect(() => {
    searchByBrandName(category);
  }, [category]);

  useEffect(() => {
    setProductList(searchProducts)
  }, [searchProducts])

  return (
    <div className="w-full h-[535px] overflow-x-auto p-4 flex flex-col">
      <span
        // navigating to previous page from where search is called
        onClick={() => navigate(location.state?.from || "/")}
        className=" w-[8%] left-2  text-gray-800 hover:cursor-pointer"
      >
        ← Back
      </span>
      {
        productList?.length ? (
          productList.map((product) => (<ProductList key={product.id} product={product} />))
        ) : (
          <div className='text-center text-3xl text-red-400 mt-4'>Sorry, no product found... 😥</div>
        )
      }
    </div>
  );
}

export default Search;
