import ProductList from '../card/ProductList'
import { useProductContext } from '../../context/ProductsContext';
import ShimmerCard from '../card/ShimmerCard';

function Home() {

  const { products } = useProductContext();

  /*NOTE - 
  1. console.log(Array(6)); // [ <6 empty slots> ]
  2. console.log([...Array(6)]); // [undefined, undefined, undefined, undefined, undefined, undefined]
  3. [...Array(6)].map((_, index) => console.log(index)); // Output: 0, 1, 2, 3, 4, 5
  */


  return (
    <div className='w-full h-[535px] overflow-x-auto'>
      {
        products?.length
          ?
          products.map((product) => (<ProductList key={product.id} product={product} />))
          : // ask sir is this a good aproch or not
          ([...Array(10)].map((_, index) => <ShimmerCard key={index} />)) 
      }
    </div>
  )
}

export default Home;
